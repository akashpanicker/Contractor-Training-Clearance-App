import svgPaths from "./svg-qvsw333gb";

function MobileSignal() {
  return (
    <div className="h-[10px] relative shrink-0 w-[18px]" data-name="Mobile Signal">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g id="Mobile Signal">
          <path d={svgPaths.pa13f700} fill="var(--fill-0, black)" id="Mobile Signal_2" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[10.965px] relative shrink-0 w-[15.272px]" data-name="Wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.9652">
        <g id="Wifi">
          <path d={svgPaths.p3e788c00} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="col-1 h-[13px] ml-0 mt-[calc(50%-6.5px)] relative row-1 w-[26.978px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9781 13">
        <g id="Battery">
          <path d={svgPaths.p35a5ef80} id="Rectangle" opacity="0.2" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p31381a00} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.2" />
          <path d={svgPaths.p3838ab00} fill="var(--fill-0, black)" id="Rectangle_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Battery">
      <Battery1 />
    </div>
  );
}

function StatusPhone() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[283px] py-px top-[15px]" data-name="Status Phone">
      <MobileSignal />
      <Wifi />
      <Battery />
    </div>
  );
}

function TitleBackIcon() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Title/Back-icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#374151] text-[20px]">Home</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#00539b] text-[18px]" dir="auto">
            My Bookings
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0063c5] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabs">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".State">
          <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-full" data-name=".Content">
            <div aria-hidden="true" className="absolute border-[#0063c5] border-b-2 border-solid inset-0 pointer-events-none" />
            <Container />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".State">
          <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0 w-full" data-name=".Content">
            <div aria-hidden="true" className="absolute border-[#d2dae7] border-b border-solid inset-0 pointer-events-none" />
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearLocation() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.pf58b000} id="Vector" stroke="var(--stroke-0, #4B5563)" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="var(--stroke-0, #4B5563)" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="var(--stroke-0, #4B5563)" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame2 />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px] whitespace-pre-wrap">Elite Ortho Clinic, USA</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full whitespace-pre-wrap">Oxy</p>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px]">Training XYZ</p>
        <Frame3 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00539b] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white" dir="auto">
            Reschedule
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[10px]" data-name="Label Button">
        <div aria-hidden="true" className="absolute border-2 border-[#0063c5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[20px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0063c5] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Cancel</p>
            </div>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card01">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[14px]">May 22, 2026 - 10.00 AM</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                <line id="Line 6" stroke="var(--stroke-0, #E5E7EB)" x2="295" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame6 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                <line id="Line 6" stroke="var(--stroke-0, #E5E7EB)" x2="295" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-col items-start pb-[10px] px-[24px] relative w-full">
        <Card />
      </div>
    </div>
  );
}

function Appointments() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Appointments">
      <Frame8 />
      <Frame1 />
      <Cards />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[44px] w-[375px]">
      <TitleBackIcon />
      <Appointments />
    </div>
  );
}

function VuesaxBoldHome() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/home">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p2a26d200} fill="var(--fill-0, #00539B)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearCalendar() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d="M8 2V5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M16 2V5" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
          <path d="M15.6947 13.7H15.7037" id="Vector_6" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.6947 16.7H15.7037" id="Vector_7" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 13.7H12.0045" id="Vector_8" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 16.7H12.0045" id="Vector_9" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" id="Vector_10" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" id="Vector_11" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearProfile() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/profile">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="profile">
          <path d={svgPaths.p11b6c600} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18d86500} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[62px] items-center justify-between left-0 px-[48px] py-[14px] top-[737px] w-[375px]" data-name="Menu bar">
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/bold/home">
        <VuesaxBoldHome />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Appointment">
        <VuesaxLinearCalendar />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Profile">
        <VuesaxLinearProfile />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#f6f6f6]" />
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="bg-white overflow-clip relative rounded-[9px] size-full" data-name="Schedule">
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-name="Native / Status Bar">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[30px] not-italic text-[16px] text-black top-1/2 whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <StatusPhone />
      </div>
      <Frame />
      <MenuBar />
      <div className="absolute bottom-0 h-[13px] left-0 w-[375px]" data-name="Native / Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] w-[148px]" data-name="rectangle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 5">
            <path clipRule="evenodd" d={svgPaths.pbe25900} fill="var(--fill-0, #6B7789)" fillRule="evenodd" id="rectangle" />
          </svg>
        </div>
      </div>
    </div>
  );
}