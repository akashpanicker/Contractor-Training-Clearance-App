// =============================================================================
// assistantEngine.ts — Core Intelligence Engine for In-App Assistant
// =============================================================================

import type { Booking } from "../contexts/BookingContext";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    vendor: string;
}

export interface TrainingSession {
    id: string;
    date: string;         // Display format: "May 22, 2026"
    time: string;         // e.g., "10.00 AM"
    location: string;
    available: number;
    total: number;
    dateObject: Date;
}

export interface ClearanceStatus {
    trainingStatus: "Completed" | "Not Completed";
    certificateStatus: "Valid" | "Expired" | "Not Generated";
    clearanceStatus: "Cleared to Fly" | "Not Cleared";
    nextAction: string | null;
    certificateExpiry: Date | null;
}

export type Intent =
    | "schedule_training"
    | "reschedule_training"
    | "cancel_training"
    | "show_next_sessions"
    | "show_seat_availability"
    | "show_current_booking"
    | "show_clearance_status"
    | "show_certificate_status"
    | "explain_policy"
    | "check_pending"
    | "select_session"
    | "book_additional"
    | "greeting"
    | "help"
    | "confirm_yes"
    | "confirm_no"
    | "unknown";

export interface PendingAction {
    type: "cancel" | "book" | "reschedule" | "choose_action";
    data?: any;
}

export interface AssistantContext {
    user: UserProfile | null;
    bookings: Booking[];
    pendingAction: PendingAction | null;
    getAvailableSeats: (date: Date, time: string) => { available: number; total: number };
    lastShownSessions: TrainingSession[];
}

export interface AssistantResponse {
    text: string;
    newPendingAction: PendingAction | null;
    action?: {
        type: "book" | "cancel" | "reschedule";
        payload: any;
    };
    sessions?: TrainingSession[];
}

// -----------------------------------------------------------------------------
// Intent Detection — Pattern Matching
// -----------------------------------------------------------------------------

interface IntentPattern {
    intent: Intent;
    patterns: RegExp[];
    keywords: string[];
}

const intentPatterns: IntentPattern[] = [
    {
        intent: "confirm_yes",
        patterns: [/^y(es)?$/i, /^confirm$/i, /^sure$/i, /^ok(ay)?$/i, /^go ahead$/i, /^do it$/i, /^proceed$/i, /^yep$/i, /^yeah$/i, /^affirmative$/i],
        keywords: [],
    },
    {
        intent: "confirm_no",
        patterns: [/^n(o)?$/i, /^nope$/i, /^cancel$/i, /^never\s?mind$/i, /^don'?t$/i, /^stop$/i, /^nah$/i],
        keywords: [],
    },
    {
        intent: "greeting",
        patterns: [/^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|yo|sup)\b/i],
        keywords: [],
    },
    {
        intent: "cancel_training",
        patterns: [
            /cancel\s*(my\s*)?(training|booking|appointment|session)/i,
            /remove\s*(my\s*)?(training|booking|appointment|session)/i,
            /delete\s*(my\s*)?(training|booking|appointment|session)/i,
            /drop\s*(my\s*)?(training|booking|appointment)/i,
            /i\s*(want\s*to|need\s*to|would\s*like\s*to)\s*cancel/i,
            /cancel\s*it/i,
        ],
        keywords: ["cancel", "remove", "delete", "drop"],
    },
    {
        intent: "reschedule_training",
        patterns: [
            /reschedule\s*(my\s*)?(training|booking|appointment|session)?/i,
            /change\s*(my\s*)?(date|time|training|booking|appointment|schedule)/i,
            /move\s*(my\s*)?(training|booking|appointment|session)/i,
            /shift\s*(my\s*)?(training|booking|appointment)/i,
            /i\s*(want\s*to|need\s*to|would\s*like\s*to)\s*(reschedule|change|move)/i,
            /can\s*i\s*(reschedule|change|move)\s*(my|the)?/i,
            /push\s*(it|my\s*training)\s*(back|forward)/i,
            /change\s*my\s*date/i,
        ],
        keywords: ["reschedule", "move", "shift", "push back"],
    },
    {
        intent: "book_additional",
        patterns: [
            /\b(book|schedule|add)\s*(an?\s*)?additional\s*(training|session|appointment|one)?/i,
            /\badditional\s*(training|session|booking|appointment)/i,
            /\b(book|schedule)\s*(another|one\s*more|a\s*new)\s*(training|session|appointment|one)?/i,
            /\badd\s*(another|one\s*more|a\s*new)\s*(training|session|booking|appointment)?/i,
        ],
        keywords: ["additional session", "another session", "book additional", "another training"],
    },
    {
        intent: "select_session",
        patterns: [
            /\b(book|select|pick|choose)\s*(me\s*)?(the\s*)?(first|second|third|1st|2nd|3rd)\s*(one|option|session|slot)?/i,
            /\b(the\s*)?(first|second|third|1st|2nd|3rd)\s*(one|option|session|slot)/i,
            /\b(option|number|#)\s*(1|2|3)\b/i,
            /^\s*(1|2|3)\s*$/,
        ],
        keywords: [],
    },
    {
        intent: "schedule_training",
        patterns: [
            /\b(schedule|book|reserve|sign\s*up\s*for)\s*(a\s*)?(training|session|appointment)?/i,
            /i\s*(need|want|would\s*like)\s*(a\s*)?(training|session|to\s*schedule|to\s*book)/i,
            /set\s*up\s*(a\s*)?(training|session|appointment)/i,
            /register\s*(for\s*)?(a\s*)?(training|session)/i,
            /book\s*(it|me\s*in|a\s*slot)/i,
            /i\s*need\s*this\s*done\s*soon/i,
            /enroll\s*(me|in)/i,
            /book\s*training/i,
        ],
        keywords: ["schedule", "book", "reserve", "sign up", "register", "enroll"],
    },
    {
        intent: "show_next_sessions",
        patterns: [
            /\b(next|upcoming|available)\s*(training|session|class|slot|date)/i,
            /when\s*('s|is)\s*(the\s*)?(next|upcoming)\s*(one|training|session)?/i,
            /what\s*(training|session)s?\s*are\s*(available|open|coming)/i,
            /show\s*(me\s*)?(the\s*)?(next|available|upcoming)\s*(training|session|slot)/i,
            /what\s*('s|is)\s*(available|open|coming\s*up)/i,
            /any\s*(training|session)s?\s*(available|coming|open)/i,
        ],
        keywords: ["next session", "upcoming", "available sessions", "next training"],
    },
    {
        intent: "show_seat_availability",
        patterns: [
            /\b(seat|spot|place|capacity)\s*(availability|available|open|left)/i,
            /how\s*many\s*(seats|spots|places)\s*(are\s*)?(available|open|left)/i,
            /is\s*(there|it)\s*(still\s*)?(room|space|seats|spots)/i,
            /can\s*i\s*(still\s*)?(get\s*a\s*)?seat/i,
        ],
        keywords: ["seats", "availability", "spots", "capacity"],
    },
    {
        intent: "show_current_booking",
        patterns: [
            /\b(my|current)\s*(booking|schedule|appointment|training)/i,
            /what\s*('s|is)\s*(my|the)\s*(booking|schedule|appointment|training)/i,
            /do\s*i\s*have\s*(a\s*)?(booking|training|appointment|session)/i,
            /show\s*(me\s*)?(my\s*)?(booking|training|schedule|appointment)/i,
            /when\s*('s|is)\s*(my)\s*(training|booking|appointment|next\s*one)/i,
            /am\s*i\s*(booked|scheduled|registered)/i,
        ],
        keywords: ["my booking", "my training", "my schedule", "my appointment"],
    },
    {
        intent: "show_clearance_status",
        patterns: [
            /\b(clearance|cleared)\s*(status|check)?/i,
            /am\s*i\s*(cleared|good)\s*(to\s*(fly|go|work))?/i,
            /can\s*i\s*(fly|go|work)/i,
            /do\s*i\s*have\s*clearance/i,
            /check\s*(my\s*)?(clearance|status)/i,
            /am\s*i\s*good\s*to\s*fly/i,
            /flight\s*clearance/i,
        ],
        keywords: ["clearance", "cleared", "fly", "good to fly"],
    },
    {
        intent: "show_certificate_status",
        patterns: [
            /\b(certificate|cert|certification)\s*(status|valid|expire|expiry)?/i,
            /is\s*(my\s*)?(certificate|cert|certification)\s*(still\s*)?(valid|active|expired)/i,
            /when\s*(does|will)\s*(my\s*)?(certificate|cert)\s*(expire|end)/i,
            /certificate\s*expiry/i,
        ],
        keywords: ["certificate", "certification", "cert", "expiry"],
    },
    {
        intent: "check_pending",
        patterns: [
            /\b(anything|something)\s*(pending|remaining|left|incomplete|outstanding)/i,
            /is\s*there\s*(anything|something)\s*(pending|remaining|I\s*need\s*to\s*do)/i,
            /what\s*(do\s*I\s*(need|have)\s*to\s*do|'s\s*pending|'s\s*remaining)/i,
            /any\s*(pending|outstanding)\s*(tasks?|items?|actions?|requirements?)/i,
            /what\s*('s|is)\s*(left|incomplete)/i,
            /status\s*check/i,
            /what\s*do\s*i\s*need/i,
        ],
        keywords: ["pending", "remaining", "incomplete", "outstanding", "what do i need"],
    },
    {
        intent: "explain_policy",
        patterns: [
            /\b(policy|policies|rules?|requirements?|guidelines?)\b/i,
            /what\s*('s|is|are)\s*(the\s*)?(policy|policies|rules?|requirements?|guidelines?)/i,
            /explain\s*(the\s*)?(policy|policies|rules?|requirements?|process)/i,
            /how\s*(does|do)\s*(this|it|training|booking|clearance)\s*work/i,
            /tell\s*me\s*(about|the)\s*(process|procedure|policy)/i,
        ],
        keywords: ["policy", "rules", "requirements", "guidelines", "how does it work"],
    },
    {
        intent: "help",
        patterns: [
            /^help$/i,
            /what\s*can\s*you\s*(do|help\s*with)/i,
            /how\s*can\s*you\s*help/i,
            /\bhelp\s*me\b/i,
            /what\s*are\s*(your|the)\s*(features|capabilities|options)/i,
        ],
        keywords: ["help"],
    },
];

// -----------------------------------------------------------------------------
// Intent Detection
// -----------------------------------------------------------------------------

export function detectIntent(input: string, hasPendingAction: boolean): Intent {
    const text = input.toLowerCase().trim();

    // Confirmation priority if pending action
    if (hasPendingAction) {
        if (/\b(yes|yep|yeah|sure|confirm|ok|okay|go ahead|proceed)\b/i.test(text)) {
            return "confirm_yes";
        }
        if (/\b(no|nope|nah|stop|never mind|don'?t)\b/i.test(text)) {
            return "confirm_no";
        }
    }

    let bestIntent: Intent = "unknown";
    let bestScore = 0;

    for (const { intent, patterns, keywords } of intentPatterns) {
        if (intent === "confirm_yes" || intent === "confirm_no") continue;

        let score = 0;

        // Pattern matches = strong weight
        for (const pattern of patterns) {
            if (pattern.test(text)) {
                score += 5;
            }
        }

        // Keyword matches = lighter weight
        for (const keyword of keywords) {
            if (text.includes(keyword.toLowerCase())) {
                score += 2;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestIntent = intent;
        }
    }

    // If weak match, treat as unknown
    if (bestScore < 3) return "unknown";

    return bestIntent;
}

// -----------------------------------------------------------------------------
// Date/Time Parsing
// -----------------------------------------------------------------------------

const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
];

const monthAbbreviations: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

export function parseDateTime(input: string): { date: Date | null; time: string | null } {
    let parsedDate: Date | null = null;
    let parsedTime: string | null = null;

    const text = input.toLowerCase();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // --- In X days ---
    const inDaysMatch = text.match(/\bin\s+(\d+)\s+days?\b/);
    if (inDaysMatch) {
        const days = parseInt(inDaysMatch[1]);
        const d = new Date(today);
        d.setDate(d.getDate() + days);
        parsedDate = d;
    }

    // --- Next Monday style ---
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const nextDayMatch = text.match(/\b(next|this)\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/);
    if (!parsedDate && nextDayMatch) {
        const targetDay = daysOfWeek.indexOf(nextDayMatch[2]);
        const currentDay = today.getDay();
        let diff = targetDay - currentDay;
        if (diff <= 0) diff += 7;
        const d = new Date(today);
        d.setDate(today.getDate() + diff);
        parsedDate = d;
    }

    // --- Tomorrow ---
    if (!parsedDate && /\btomorrow\b/.test(text)) {
        const d = new Date(today);
        d.setDate(today.getDate() + 1);
        parsedDate = d;
    }

    // --- Month name date ---
    const dateRegex = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{1,2})\b/i;
    const match = input.match(dateRegex);
    if (!parsedDate && match) {
        const monthIndex = monthAbbreviations[match[1].toLowerCase().substring(0, 3)];
        const day = parseInt(match[2]);
        parsedDate = new Date(2026, monthIndex, day);
        parsedDate.setHours(0, 0, 0, 0);
    }

    // --- Time ---
    const timeMatch = input.match(/\b(\d{1,2})[.:]?(\d{2})?\s*(am|pm)\b/i);
    if (timeMatch) {
        const hour = timeMatch[1];
        const min = timeMatch[2] || "00";
        parsedTime = `${hour}.${min} ${timeMatch[3].toUpperCase()}`;
    }

    return { date: parsedDate, time: parsedTime };
}

// -----------------------------------------------------------------------------
// Available Sessions Generator
// -----------------------------------------------------------------------------

const standardTimeSlots = ["09.00 AM", "09.30 AM", "10.00 AM", "4.30 PM", "5.00 PM", "5.30 PM"];

export function getNextAvailableSessions(
    getAvailableSeats: (date: Date, time: string) => { available: number; total: number },
    count: number = 3
): TrainingSession[] {
    const sessions: TrainingSession[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Start from tomorrow
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() + 1);

    // Look up to 30 days ahead
    for (let dayOffset = 0; dayOffset < 30 && sessions.length < count; dayOffset++) {
        const checkDate = new Date(startDate);
        checkDate.setDate(checkDate.getDate() + dayOffset);

        // Skip weekends
        const dayOfWeek = checkDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;

        for (const time of standardTimeSlots) {
            if (sessions.length >= count) break;
            const seats = getAvailableSeats(checkDate, time);
            if (seats.available > 0) {
                sessions.push({
                    id: `${checkDate.toISOString().split("T")[0]}_${time.replace(/[\s.]/g, "")}`,
                    date: checkDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                    time,
                    location: "Oxy Office",
                    available: seats.available,
                    total: seats.total,
                    dateObject: new Date(checkDate),
                });
            }
        }
    }

    return sessions;
}

// -----------------------------------------------------------------------------
// Clearance Status Logic
// -----------------------------------------------------------------------------

export function computeClearanceStatus(
    bookings: Booking[],
): ClearanceStatus {
    const completedBookings = bookings.filter(b => {
        const bookingDate = new Date(b.dateObject);
        return bookingDate < new Date() && b.status === "upcoming";
    });

    const hasUpcoming = bookings.some(b => b.status === "upcoming" && new Date(b.dateObject) >= new Date());
    const hasCompleted = completedBookings.length > 0;

    // Simulate certificate and clearance based on training history
    let trainingStatus: "Completed" | "Not Completed" = hasCompleted ? "Completed" : "Not Completed";
    let certificateStatus: "Valid" | "Expired" | "Not Generated" = "Not Generated";
    let clearanceStatus: "Cleared to Fly" | "Not Cleared" = "Not Cleared";
    let nextAction: string | null = null;
    let certificateExpiry: Date | null = null;

    if (hasCompleted) {
        // Certificate is valid for 1 year from last completed training
        const lastCompleted = completedBookings.sort(
            (a, b) => new Date(b.dateObject).getTime() - new Date(a.dateObject).getTime()
        )[0];
        certificateExpiry = new Date(lastCompleted.dateObject);
        certificateExpiry.setFullYear(certificateExpiry.getFullYear() + 1);

        if (certificateExpiry > new Date()) {
            certificateStatus = "Valid";
            clearanceStatus = "Cleared to Fly";

            // Check if expiring within 30 days
            const daysUntilExpiry = Math.ceil(
                (certificateExpiry.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            );
            if (daysUntilExpiry <= 30) {
                nextAction = `Certificate expires in ${daysUntilExpiry} days. Schedule renewal training.`;
            }
        } else {
            certificateStatus = "Expired";
            clearanceStatus = "Not Cleared";
            nextAction = "Certificate has expired. Schedule new training to renew.";
        }
    } else if (hasUpcoming) {
        nextAction = "Complete your upcoming training to obtain clearance.";
    } else {
        nextAction = "No training on record. Schedule training to begin clearance process.";
    }

    return { trainingStatus, certificateStatus, clearanceStatus, nextAction, certificateExpiry };
}

// -----------------------------------------------------------------------------
// Response Generator
// -----------------------------------------------------------------------------

export function generateResponse(
    input: string,
    context: AssistantContext,
): AssistantResponse {
    const { user, bookings, pendingAction, getAvailableSeats, lastShownSessions } = context;
    const intent = detectIntent(input, !!pendingAction);

    const upcomingBookings = bookings.filter(b => b.status === "upcoming");
    const nextBooking = upcomingBookings.length > 0
        ? upcomingBookings.sort((a, b) => new Date(a.dateObject).getTime() - new Date(b.dateObject).getTime())[0]
        : null;

    // --- Helper: parse ordinal selection from input ---
    const parseOrdinalSelection = (text: string): number | null => {
        const lower = text.toLowerCase().trim();
        if (/\b(first|1st)\b/.test(lower) || /^\s*1\s*$/.test(lower)) return 0;
        if (/\b(second|2nd)\b/.test(lower) || /^\s*2\s*$/.test(lower)) return 1;
        if (/\b(third|3rd)\b/.test(lower) || /^\s*3\s*$/.test(lower)) return 2;
        // also handle "option 1", "number 2", "#3"
        const optMatch = lower.match(/(?:option|number|#)\s*(1|2|3)/);
        if (optMatch) return parseInt(optMatch[1]) - 1;
        return null;
    };

    // --- Helper: build a booking confirmation from a session ---
    const buildBookConfirmation = (session: TrainingSession): AssistantResponse => {
        const seats = getAvailableSeats(session.dateObject, session.time);
        if (seats.available === 0) {
            return {
                text: `That session (${session.date} at ${session.time}) is now full. Please select another.`,
                newPendingAction: null,
            };
        }
        const seatsNote = seats.available <= 5 ? `\n\nNote: Only ${seats.available} seats remaining.` : "";
        return {
            text: `Ready to book:\n\nDate: ${session.date}\nTime: ${session.time}\nLocation: ${session.location}\nSeats: ${seats.available}/${seats.total} available${seatsNote}\n\nConfirm this booking? (yes/no)`,
            newPendingAction: {
                type: "book",
                data: {
                    date: session.date,
                    time: session.time,
                    location: session.location,
                    dateObject: session.dateObject,
                    training: "Training XYZ",
                    company: "Oxy",
                },
            },
        };
    };

    // Handle pending action confirmations first
    if (pendingAction) {
        // Handle "choose_action" pending (reschedule vs additional)
        if (pendingAction.type === "choose_action") {
            const lower = input.toLowerCase().trim();
            const wantsAdditional = /\badditional\b|\banother\b|\bnew\s*(one|session|training)\b|\bbook\b|\badd\b/i.test(lower);
            const wantsReschedule = /\breschedule\b|\bchange\b|\bmove\b/i.test(lower);

            if (wantsAdditional || intent === "book_additional") {
                // Proceed to show available sessions for additional booking
                const sessions = getNextAvailableSessions(getAvailableSeats, 3);
                if (sessions.length === 0) {
                    return {
                        text: "No sessions are currently available. Please check back later.",
                        newPendingAction: null,
                    };
                }
                let response = "Here are the next available sessions:\n";
                sessions.forEach((s, i) => {
                    response += `\n${i + 1}. ${s.date} at ${s.time}\n   Location: ${s.location}\n   Seats: ${s.available}/${s.total} available`;
                });
                response += "\n\nTo book, say the session number (e.g. 'the first one') or specify a date and time.";
                return { text: response, newPendingAction: null, sessions };
            }

            if (wantsReschedule) {
                return {
                    text: `Your current booking:\n\nDate: ${nextBooking?.date}\nTime: ${nextBooking?.time}\nLocation: ${nextBooking?.location}\n\nWhat date and time would you like to reschedule to?\nExample: 'Reschedule to June 20 at 2.00 PM'`,
                    newPendingAction: null,
                };
            }

            // If they just said "yes" without specifying which, clarify
            if (intent === "confirm_yes") {
                return {
                    text: "Would you like to:\n\n1. Book an additional session\n2. Reschedule your existing booking\n\nPlease specify, e.g. 'book additional' or 'reschedule'.",
                    newPendingAction: pendingAction,
                };
            }

            if (intent === "confirm_no") {
                return {
                    text: "No problem. What else can I help with?",
                    newPendingAction: null,
                };
            }

            // If they said something else unrelated, drop the pending and handle normally
            // Fall through to main intent handling below
        } else {
            // Handle book/cancel/reschedule confirmations
            if (intent === "confirm_yes") {
                if (pendingAction.type === "cancel" && pendingAction.data) {
                    return {
                        text: `Training on ${pendingAction.data.date} at ${pendingAction.data.time} has been cancelled. Seat released.\n\nAnything else I can help with?`,
                        newPendingAction: null,
                        action: { type: "cancel", payload: { bookingId: pendingAction.data.id } },
                    };
                }
                if (pendingAction.type === "book" && pendingAction.data) {
                    return {
                        text: `Training confirmed.\n\nDate: ${pendingAction.data.date}\nTime: ${pendingAction.data.time}\nLocation: ${pendingAction.data.location}\n\nYou are now booked. Anything else?`,
                        newPendingAction: null,
                        action: { type: "book", payload: pendingAction.data },
                    };
                }
                if (pendingAction.type === "reschedule" && pendingAction.data) {
                    return {
                        text: `Training rescheduled.\n\nNew Date: ${pendingAction.data.newDate}\nNew Time: ${pendingAction.data.newTime}\nLocation: ${pendingAction.data.location}\n\nOld booking released. Anything else?`,
                        newPendingAction: null,
                        action: { type: "reschedule", payload: pendingAction.data },
                    };
                }
            }

            if (intent === "confirm_no") {
                return {
                    text: "Action cancelled. No changes made.\n\nWhat else can I help with?",
                    newPendingAction: null,
                };
            }

            return {
                text: "Please reply 'yes' to confirm or 'no' to cancel the pending action.",
                newPendingAction: pendingAction,
            };
        }
    }

    // Main intent handling
    switch (intent) {
        case "greeting": {
            const name = user ? user.firstName : "there";
            let greeting = `Hello, ${name}. How can I assist you today?`;

            // Proactive: Check if they have upcoming bookings or need attention
            if (nextBooking) {
                const bookingDate = new Date(nextBooking.dateObject);
                const now = new Date();
                const hoursUntil = (bookingDate.getTime() - now.getTime()) / (1000 * 60 * 60);
                if (hoursUntil > 0 && hoursUntil <= 24) {
                    greeting += `\n\nReminder: Your training is in less than 24 hours.\nDate: ${nextBooking.date}\nTime: ${nextBooking.time}\nLocation: ${nextBooking.location}`;
                }
            }

            return { text: greeting, newPendingAction: null };
        }

        case "select_session": {
            // User is selecting from previously listed sessions
            const selIndex = parseOrdinalSelection(input);
            if (selIndex !== null && lastShownSessions && selIndex < lastShownSessions.length) {
                return buildBookConfirmation(lastShownSessions[selIndex]);
            }
            return {
                text: "I could not find a matching session. Please specify a date and time, e.g. 'Book on May 15 at 10.00 AM'.",
                newPendingAction: null,
            };
        }

        case "book_additional":
        case "schedule_training": {
            // Determine if user is explicitly requesting an additional booking
            const lower = input.toLowerCase();
            const wantsAdditional = intent === "book_additional" ||
                /\badditional\b|\banother\b|\bone\s*more\b|\ba\s*new\s*(session|training)\b/i.test(lower);

            // If user already has a booking and didn't explicitly ask for additional, prompt choice
            if (nextBooking && !wantsAdditional) {
                // But if they provided a specific date+time, allow it directly
                const { date: specDate, time: specTime } = parseDateTime(input);
                if (!specDate || !specTime) {
                    return {
                        text: `You already have training scheduled:\n\nDate: ${nextBooking.date}\nTime: ${nextBooking.time}\nLocation: ${nextBooking.location}\n\nWould you like to reschedule, or book an additional session?\nReply 'reschedule' or 'book additional'.`,
                        newPendingAction: { type: "choose_action" },
                    };
                }
            }

            // Check if user is selecting from previously shown sessions
            const ordinalIdx = parseOrdinalSelection(input);
            if (ordinalIdx !== null && lastShownSessions && ordinalIdx < lastShownSessions.length) {
                return buildBookConfirmation(lastShownSessions[ordinalIdx]);
            }

            const { date, time } = parseDateTime(input);

            if (date && time) {
                const seats = getAvailableSeats(date, time);
                if (seats.available === 0) {
                    const sessions = getNextAvailableSessions(getAvailableSeats, 3);
                    let fallback = "That session is full. No seats available.\n\nHere are the next available sessions:\n";
                    sessions.forEach((s, i) => {
                        fallback += `\n${i + 1}. ${s.date} at ${s.time}\n   Location: ${s.location}\n   Seats: ${s.available}/${s.total} available`;
                    });
                    return { text: fallback, newPendingAction: null, sessions };
                }

                const dateStr = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
                const seatsNote = seats.available <= 5 ? `\n\nNote: Only ${seats.available} seats remaining.` : "";

                return {
                    text: `Ready to book:\n\nDate: ${dateStr}\nTime: ${time}\nLocation: Oxy Office\nSeats: ${seats.available}/${seats.total} available${seatsNote}\n\nConfirm this booking? (yes/no)`,
                    newPendingAction: {
                        type: "book",
                        data: {
                            date: dateStr,
                            time,
                            location: "Oxy Office",
                            dateObject: date,
                            training: "Training XYZ",
                            company: "Oxy",
                        },
                    },
                };
            }

            // No date/time provided — show next available sessions
            const sessions = getNextAvailableSessions(getAvailableSeats, 3);
            if (sessions.length === 0) {
                return {
                    text: "No sessions are currently available. Please check back later or contact support.",
                    newPendingAction: null,
                };
            }

            let response = "Here are the next available sessions:\n";
            sessions.forEach((s, i) => {
                response += `\n${i + 1}. ${s.date} at ${s.time}\n   Location: ${s.location}\n   Seats: ${s.available}/${s.total} available`;
            });
            response += "\n\nTo book, say the session number (e.g. 'the first one') or specify a date and time.";

            return { text: response, newPendingAction: null, sessions };
        }

        case "reschedule_training": {
            if (!nextBooking) {
                return {
                    text: "You have no upcoming training to reschedule.\n\nWould you like to schedule a new training session?",
                    newPendingAction: null,
                };
            }

            const { date, time } = parseDateTime(input);

            if (date && time) {
                const seats = getAvailableSeats(date, time);
                if (seats.available === 0) {
                    const sessions = getNextAvailableSessions(getAvailableSeats, 3);
                    let fallback = "That session is full.\n\nHere are the next available sessions:\n";
                    sessions.forEach((s, i) => {
                        fallback += `\n${i + 1}. ${s.date} at ${s.time}\n   Seats: ${s.available}/${s.total} available`;
                    });
                    return { text: fallback, newPendingAction: null };
                }

                const newDateStr = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

                return {
                    text: `Reschedule details:\n\nCurrent: ${nextBooking.date} at ${nextBooking.time}\nNew: ${newDateStr} at ${time}\nLocation: Oxy Office\n\nConfirm reschedule? (yes/no)`,
                    newPendingAction: {
                        type: "reschedule",
                        data: {
                            bookingId: nextBooking.id,
                            oldDate: nextBooking.dateObject,
                            oldTime: nextBooking.time,
                            newDate: newDateStr,
                            newTime: time,
                            newDateObject: date,
                            location: "Oxy Office",
                            training: "Training XYZ",
                            company: "Oxy",
                        },
                    },
                };
            }

            // No date/time provided
            return {
                text: `Your current booking:\n\nDate: ${nextBooking.date}\nTime: ${nextBooking.time}\nLocation: ${nextBooking.location}\n\nWhat date and time would you like to reschedule to?\nExample: 'Reschedule to June 20 at 2.00 PM'`,
                newPendingAction: null,
            };
        }

        case "cancel_training": {
            if (!nextBooking) {
                return {
                    text: "You have no upcoming training to cancel.",
                    newPendingAction: null,
                };
            }

            return {
                text: `Cancel this training?\n\nDate: ${nextBooking.date}\nTime: ${nextBooking.time}\nLocation: ${nextBooking.location}\n\nConfirm cancellation? (yes/no)`,
                newPendingAction: { type: "cancel", data: nextBooking },
            };
        }

        case "show_next_sessions": {
            const sessions = getNextAvailableSessions(getAvailableSeats, 3);
            if (sessions.length === 0) {
                return {
                    text: "No upcoming sessions are currently available. Please check back later.",
                    newPendingAction: null,
                };
            }

            let response = "Next available training sessions:\n";
            sessions.forEach((s, i) => {
                response += `\n${i + 1}. ${s.date} at ${s.time}\n   Location: ${s.location}\n   Seats: ${s.available}/${s.total} available`;
            });
            response += "\n\nTo book, say the session number (e.g. 'book the first one') or specify a date and time.";

            return { text: response, newPendingAction: null, sessions };
        }

        case "show_seat_availability": {
            const { date, time } = parseDateTime(input);
            if (date && time) {
                const seats = getAvailableSeats(date, time);
                const dateStr = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
                return {
                    text: `Seat availability for ${dateStr} at ${time}:\n${seats.available}/${seats.total} seats available.${seats.available <= 5 && seats.available > 0 ? "\n\nLimited seats remaining. Book soon." : ""}${seats.available === 0 ? "\n\nThis session is full." : ""}`,
                    newPendingAction: null,
                };
            }

            // Show general availability for upcoming sessions
            const sessions = getNextAvailableSessions(getAvailableSeats, 3);
            if (sessions.length === 0) {
                return {
                    text: "No sessions available to display seat information.",
                    newPendingAction: null,
                };
            }

            let response = "Seat availability for upcoming sessions:\n";
            sessions.forEach((s, i) => {
                const seatWarning = s.available <= 5 ? " [Limited]" : "";
                response += `\n${i + 1}. ${s.date} at ${s.time}\n   Seats: ${s.available}/${s.total} available${seatWarning}`;
            });

            return { text: response, newPendingAction: null };
        }

        case "show_current_booking": {
            if (upcomingBookings.length === 0) {
                return {
                    text: "You have no current bookings.\n\nWould you like to schedule a training session?",
                    newPendingAction: null,
                };
            }

            let response = upcomingBookings.length === 1
                ? "Your current booking:\n"
                : `You have ${upcomingBookings.length} upcoming bookings:\n`;

            upcomingBookings.forEach((b, i) => {
                const prefix = upcomingBookings.length > 1 ? `\n${i + 1}. ` : "\n";
                response += `${prefix}Date: ${b.date}\n   Time: ${b.time}\n   Training: ${b.training}\n   Location: ${b.location}\n   Company: ${b.company}`;
            });

            // Proactive: Remind if within 24 hours
            if (nextBooking) {
                const hoursUntil = (new Date(nextBooking.dateObject).getTime() - new Date().getTime()) / (1000 * 60 * 60);
                if (hoursUntil > 0 && hoursUntil <= 24) {
                    response += "\n\nNote: Your next training is within 24 hours.";
                }
            }

            return { text: response, newPendingAction: null };
        }

        case "show_clearance_status": {
            const status = computeClearanceStatus(bookings);

            let response = "Clearance Status:\n";
            response += `\nTraining Status: ${status.trainingStatus}`;
            response += `\nCertificate Status: ${status.certificateStatus}`;
            response += `\nClearance Status: ${status.clearanceStatus}`;
            if (status.nextAction) {
                response += `\nNext Action: ${status.nextAction}`;
            }

            return { text: response, newPendingAction: null };
        }

        case "show_certificate_status": {
            const status = computeClearanceStatus(bookings);

            let response = `Certificate Status: ${status.certificateStatus}`;
            if (status.certificateExpiry) {
                response += `\nExpiry Date: ${status.certificateExpiry.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
            }
            if (status.nextAction && status.certificateStatus !== "Valid") {
                response += `\n\n${status.nextAction}`;
            }
            if (status.certificateStatus === "Valid" && status.certificateExpiry) {
                const daysLeft = Math.ceil(
                    (status.certificateExpiry.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                if (daysLeft <= 30) {
                    response += `\n\nWarning: Certificate expires in ${daysLeft} days. Consider scheduling renewal training.`;
                }
            }

            return { text: response, newPendingAction: null };
        }

        case "check_pending": {
            const status = computeClearanceStatus(bookings);
            const pendingItems: string[] = [];

            if (status.trainingStatus === "Not Completed") {
                if (nextBooking) {
                    pendingItems.push(`Training scheduled for ${nextBooking.date} at ${nextBooking.time} (not yet completed)`);
                } else {
                    pendingItems.push("No training scheduled. Training is required for clearance.");
                }
            }
            if (status.certificateStatus === "Not Generated") {
                pendingItems.push("Certificate not generated. Complete training first.");
            }
            if (status.certificateStatus === "Expired") {
                pendingItems.push("Certificate has expired. Renewal training required.");
            }
            if (status.clearanceStatus === "Not Cleared") {
                pendingItems.push("Flight clearance not granted.");
            }

            if (pendingItems.length === 0) {
                let response = "All requirements are met.\n\nTraining: Completed\nCertificate: Valid\nClearance: Cleared to Fly";
                if (status.certificateExpiry) {
                    const daysLeft = Math.ceil(
                        (status.certificateExpiry.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                    );
                    if (daysLeft <= 30) {
                        response += `\n\nNote: Certificate expires in ${daysLeft} days. Plan renewal training.`;
                    }
                }
                return { text: response, newPendingAction: null };
            }

            let response = "Pending items:\n";
            pendingItems.forEach((item, i) => {
                response += `\n${i + 1}. ${item}`;
            });
            if (status.nextAction) {
                response += `\n\nRecommended: ${status.nextAction}`;
            }

            return { text: response, newPendingAction: null };
        }

        case "explain_policy": {
            return {
                text: `Training and Clearance Policy:\n
1. Training Requirement
   All contractors must complete safety training before field deployment.

2. Scheduling
   Sessions are available on weekdays. Book via the app or through this assistant.

3. Cancellation
   Cancellations must be made at least 24 hours before the session.

4. Certificate
   A certificate is issued upon training completion and is valid for 1 year.

5. Clearance
   Flight clearance is granted only after training completion and valid certification.

6. Renewal
   Schedule renewal training before certificate expiry to maintain clearance.

Need help with a specific policy question?`,
                newPendingAction: null,
            };
        }

        case "help": {
            return {
                text: `I can assist with the following:\n
- Schedule training: "Book training on May 15 at 10.00 AM"
- Reschedule training: "Reschedule to June 20 at 2.00 PM"
- Cancel training: "Cancel my training"
- View available sessions: "Show next available sessions"
- Check seat availability: "How many seats are available?"
- View your booking: "Show my booking"
- Check clearance status: "Am I good to fly?"
- Check certificate: "Is my certificate valid?"
- Review pending items: "Is there anything pending?"
- Policies: "Explain the training policy"

What would you like to do?`,
                newPendingAction: null,
            };
        }

        case "unknown":
        default: {
            // Try to infer likely intent from vague messages
            const lower = input.toLowerCase().trim();

            // "Can I fly tomorrow?" -> clearance check
            if (/fly/i.test(lower)) {
                const status = computeClearanceStatus(bookings);
                return {
                    text: `Clearance Status: ${status.clearanceStatus}\n\nTraining: ${status.trainingStatus}\nCertificate: ${status.certificateStatus}${status.nextAction ? `\n\nNext Action: ${status.nextAction}` : ""}`,
                    newPendingAction: null,
                };
            }

            // "I need this done soon" -> suggest earliest session
            if (/soon|asap|quickly|urgent/i.test(lower)) {
                const sessions = getNextAvailableSessions(getAvailableSeats, 1);
                if (sessions.length > 0) {
                    const s = sessions[0];
                    return {
                        text: `Earliest available session:\n\nDate: ${s.date}\nTime: ${s.time}\nLocation: ${s.location}\nSeats: ${s.available}/${s.total} available\n\nWould you like to book this? (yes/no)`,
                        newPendingAction: {
                            type: "book",
                            data: {
                                date: s.date,
                                time: s.time,
                                location: s.location,
                                dateObject: s.dateObject,
                                training: "Training XYZ",
                                company: "Oxy",
                            },
                        },
                    };
                }
            }

            // "When" questions -> show booking or next sessions
            if (/^when/i.test(lower)) {
                if (nextBooking) {
                    return {
                        text: `Your next training:\n\nDate: ${nextBooking.date}\nTime: ${nextBooking.time}\nLocation: ${nextBooking.location}`,
                        newPendingAction: null,
                    };
                } else {
                    const sessions = getNextAvailableSessions(getAvailableSeats, 3);
                    if (sessions.length > 0) {
                        let response = "You have no scheduled training. Next available sessions:\n";
                        sessions.forEach((s, i) => {
                            response += `\n${i + 1}. ${s.date} at ${s.time}\n   Seats: ${s.available}/${s.total} available`;
                        });
                        return { text: response, newPendingAction: null };
                    }
                }
            }

            return {
                text: "I did not understand that request. Could you rephrase?\n\nI can help with scheduling, rescheduling, cancelling training, checking clearance status, and more. Type 'help' for the full list.",
                newPendingAction: null,
            };
        }
    }
}
