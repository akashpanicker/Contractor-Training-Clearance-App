import svgPaths from "./svg-vya4767603";

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
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#374151] text-[20px]">Book Appointment</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxBoldArrowLeft1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/arrow-left">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-left">
          <path d={svgPaths.p352ee180} fill="var(--fill-0, #9CA3AF)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldArrowLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[14px]"} data-name="vuesax/bold/arrow-left">
      <VuesaxBoldArrowLeft1 />
    </div>
  );
}

function VuesaxBoldArrowRight1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/arrow-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p24eba700} fill="var(--fill-0, #00539B)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldArrowRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[14px]"} data-name="vuesax/bold/arrow-right">
      <VuesaxBoldArrowRight1 />
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Arrows">
      <VuesaxBoldArrowLeft />
      <VuesaxBoldArrowRight />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[2px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111928] text-[14px] w-[126px]">
        <p className="leading-[1.5] whitespace-pre-wrap">March 2026</p>
      </div>
      <Arrows />
    </div>
  );
}

function Day() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Sun</p>
        </div>
      </div>
    </div>
  );
}

function Day1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Mon</p>
        </div>
      </div>
    </div>
  );
}

function Day2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Tue</p>
        </div>
      </div>
    </div>
  );
}

function Day3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Wed</p>
        </div>
      </div>
    </div>
  );
}

function Day4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Thu</p>
        </div>
      </div>
    </div>
  );
}

function Day5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Fri</p>
        </div>
      </div>
    </div>
  );
}

function Day6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Day">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center w-full whitespace-pre-wrap">Sat</p>
        </div>
      </div>
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function Day7() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center w-full whitespace-pre-wrap">1</p>
    </div>
  );
}

function Day8() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center w-full whitespace-pre-wrap">2</p>
    </div>
  );
}

function Day9() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-full whitespace-pre-wrap">3</p>
    </div>
  );
}

function Day10() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-full whitespace-pre-wrap">4</p>
    </div>
  );
}

function Day11() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-full whitespace-pre-wrap">5</p>
    </div>
  );
}

function Day12() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center w-full whitespace-pre-wrap">6</p>
    </div>
  );
}

function Day13() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center w-full whitespace-pre-wrap">7</p>
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
    </div>
  );
}

function Day14() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">8</p>
    </div>
  );
}

function Day15() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">9</p>
    </div>
  );
}

function Day16() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">10</p>
    </div>
  );
}

function Day17() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">11</p>
    </div>
  );
}

function Day18() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">12</p>
    </div>
  );
}

function Day19() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">13</p>
    </div>
  );
}

function Day20() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">14</p>
    </div>
  );
}

function Week2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
      <Day20 />
    </div>
  );
}

function Day21() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">15</p>
    </div>
  );
}

function Day22() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">16</p>
    </div>
  );
}

function Day23() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">17</p>
    </div>
  );
}

function Day24() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">18</p>
    </div>
  );
}

function Day25() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">19</p>
    </div>
  );
}

function Day26() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">20</p>
    </div>
  );
}

function Day27() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">21</p>
    </div>
  );
}

function Week3() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
      <Day27 />
    </div>
  );
}

function Day28() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">22</p>
    </div>
  );
}

function Day29() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">23</p>
    </div>
  );
}

function Day30() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">24</p>
    </div>
  );
}

function Day31() {
  return (
    <div className="bg-[#00539b] content-stretch flex flex-col items-center overflow-clip px-[2px] py-[6px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[12px] text-center text-white">30</p>
    </div>
  );
}

function Day32() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">26</p>
    </div>
  );
}

function Day33() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">27</p>
    </div>
  );
}

function Day34() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">28</p>
    </div>
  );
}

function Week4() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day28 />
      <Day29 />
      <Day30 />
      <Day31 />
      <Day32 />
      <Day33 />
      <Day34 />
    </div>
  );
}

function Day35() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">29</p>
    </div>
  );
}

function Day36() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">30</p>
    </div>
  );
}

function Day37() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">1</p>
    </div>
  );
}

function Day38() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">2</p>
    </div>
  );
}

function Day39() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center">3</p>
    </div>
  );
}

function Day40() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-30 relative shrink-0 text-[#6b7280] text-[12px] text-center">4</p>
    </div>
  );
}

function Day41() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-[8px] relative shrink-0 w-[36px]" data-name="Day">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center">5</p>
    </div>
  );
}

function Week5() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Week">
      <Day35 />
      <Day36 />
      <Day37 />
      <Day38 />
      <Day39 />
      <Day40 />
      <Day41 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Week />
      <Week1 />
      <Week2 />
      <Week3 />
      <Week4 />
      <Week5 />
    </div>
  );
}

function DatepickerDropdown() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Datepicker Dropdown">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative w-full">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}

function SelectDate() {
  return (
    <div className="h-[306px] relative shrink-0 w-full" data-name="Select Date">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#00539b] text-[18px]" dir="auto">
          Select Date
        </p>
        <DatepickerDropdown />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px]">09.00 AM</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px]">09.30 AM</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-[#00539b] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white">10.00 AM</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px]">4.30 PM</p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px]">5.00 PM</p>
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-[105px]" data-name="Tab">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px]">5.30 PM</p>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Tabs">
      <Tab3 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function HoursTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hours Tabs">
      <Tabs />
      <Tabs1 />
    </div>
  );
}

function SelectHour() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Select Hour">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#00539b] text-[18px]" dir="auto">
          Select Hour
        </p>
        <HoursTabs />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">Location</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Oxy Office</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Text/Default">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Label">
              <Label />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name=".Field">
                <Container />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[44px] w-[375px]">
      <TitleBackIcon />
      <SelectDate />
      <SelectHour />
      <Frame1 />
    </div>
  );
}

function MenuBar() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 p-[24px] top-[641px] w-[375px]" data-name="Menu bar">
      <div className="bg-[#00539b] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[10px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.14px]">Confirm</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(37,62,167,0.48),0px_0px_0px_1px_#375dfb]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#f6f6f6]" />
    </div>
  );
}

function VuesaxLinearHome() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/home">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d="M12 18V15" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1f860900} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Calendar() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d="M24 0H0V24H24V0Z" fill="var(--fill-0, #00539B)" id="Vector" opacity="0" />
          <path d={svgPaths.p8736f80} fill="var(--fill-0, #00539B)" id="Vector_2" />
          <path d={svgPaths.p1d9a4100} fill="var(--fill-0, #00539B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldCalendar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/calendar">
      <Calendar />
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

function MenuBar1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[62px] items-center justify-between left-0 px-[48px] py-[14px] top-[737px] w-[375px]" data-name="Menu bar">
      <div className="relative shrink-0 size-[24px]" data-name="Home">
        <VuesaxLinearHome />
      </div>
      <VuesaxBoldCalendar />
      <div className="relative shrink-0 size-[24px]" data-name="Profile">
        <VuesaxLinearProfile />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#f6f6f6]" />
    </div>
  );
}

export default function BookAppointment() {
  return (
    <div className="bg-white overflow-clip relative rounded-[9px] size-full" data-name="Book Appointment">
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-name="Native / Status Bar">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[30px] not-italic text-[16px] text-black top-1/2 whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <StatusPhone />
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 w-[375px]" data-name="Native / Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] w-[148px]" data-name="rectangle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 5">
            <path clipRule="evenodd" d={svgPaths.pbe25900} fill="var(--fill-0, white)" fillRule="evenodd" id="rectangle" />
          </svg>
        </div>
      </div>
      <Frame />
      <MenuBar />
      <MenuBar1 />
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