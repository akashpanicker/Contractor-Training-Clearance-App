import svgPaths from "./svg-gyak9j1563";

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
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#374151] text-[20px]">Profile</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">First Name</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">John</p>
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

function Label1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">Last Name</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Smith</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">Email ID</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">john.smith@vendor.com</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content4 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">Phone Number</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">+1 123 333 4444</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content6 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7789] text-[14px]">Vendor</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Bizmetric</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
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
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Text/Default">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Label">
              <Label1 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name=".Field">
                <Container1 />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Text/Default">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Label">
              <Label2 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name=".Field">
                <Container2 />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Text/Default">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Label">
              <Label3 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name=".Field">
                <Container3 />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Text/Default">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Label">
              <Label4 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name=".Field">
                <Container4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[44px] w-[375px]">
      <TitleBackIcon />
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
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.14px]">Update</p>
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

function Frame() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="frame">
          <path d={svgPaths.p13d05a80} fill="var(--fill-0, #00539B)" id="Vector" />
          <path d={svgPaths.pbb46500} fill="var(--fill-0, #00539B)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldFrame() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/frame">
      <Frame />
    </div>
  );
}

function MenuBar1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[62px] items-center justify-between left-0 px-[48px] py-[14px] top-[737px] w-[375px]" data-name="Menu bar">
      <div className="relative shrink-0 size-[24px]" data-name="Home">
        <VuesaxLinearHome />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/calendar">
        <VuesaxLinearCalendar />
      </div>
      <VuesaxBoldFrame />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#f6f6f6]" />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-white overflow-clip relative rounded-[9px] size-full" data-name="Profile">
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
      <Frame2 />
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