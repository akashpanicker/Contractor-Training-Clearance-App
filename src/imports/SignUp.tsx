import svgPaths from "./svg-qoo7jpac9s";

function MobileSignal() {
  return (
    <div className="h-[10px] relative shrink-0 w-[18px]" data-name="Mobile Signal">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g id="Mobile Signal">
          <path d={svgPaths.pa13f700} fill="var(--fill-0, white)" id="Mobile Signal_2" />
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
          <path d={svgPaths.p3e788c00} fill="var(--fill-0, white)" id="Union" />
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
          <path d={svgPaths.p35a5ef80} id="Rectangle" opacity="0.2" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p31381a00} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.2" />
          <path d={svgPaths.p3838ab00} fill="var(--fill-0, white)" id="Rectangle_2" />
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

function SignUp1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 text-[12px] tracking-[-0.12px] w-full whitespace-nowrap" data-name="Sign Up">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#eee]">
        <p className="leading-[1.4]">Already have an account?</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4d81e7]">
        <p className="leading-[1.4]">Login</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] not-italic relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#eee] text-[32px] text-center tracking-[-0.64px] w-[327px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Create account</p>
      </div>
      <SignUp1 />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Headline">
      <Text />
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

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">John</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content1 />
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

function Content4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Smith</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content3 />
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

function Content6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">john.smith@vendor.com</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content5 />
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

function Content8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">+1 123 333 4444</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content7 />
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

function Content10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7789] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Bizmetric</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#bdc8d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Text">
            <Content10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
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
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame />
        <div className="bg-[#00539b] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[10px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.14px]">Create Account</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(37,62,167,0.48),0px_0px_0px_1px_#375dfb]" />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-1/2" data-name="Content">
      <Headline />
      <Input />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="overflow-clip relative rounded-[9px] size-full" data-name="Sign Up" style={{ backgroundImage: "linear-gradient(21.4477deg, rgb(16, 29, 40) 31.348%, rgb(27, 47, 65) 75.472%)" }}>
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-name="Native / Status Bar">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[30px] not-italic text-[16px] text-white top-1/2 whitespace-nowrap">
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
      <Content />
    </div>
  );
}