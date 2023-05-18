//구조 분해 할당 문법을 사용하여
//hardhat 내부에 있는 ethers를 뽑아오고, 뽑아온 ehter를
//변수 ethers에 해당
const { ethers } = require("hardhat");

// 스마트컨트랙트를 블록체인상에 배포할때 실행될 메인 함수
async function main()
{
  // ethers에서 제공해주는 스마트컨트랙트 배포 할때 사용하는 함수 getContractFactory를 사용
  // 스마트컨트랙트를 메모리상에 올림(인스턴트화)
  const whitelistContract = await ethers.getContractFactory("Whitelist");


  // 실제 배포하는 함수. 이때 생성자 함수에 넘겨줄 값도 같이 입력해준다
  const depoloyedwhitelistConstract = await whitelistContract.deploy(10);
  //카멜케이스로 작성된 함수는 두번째 단어만 대문자로 작

  //async 가 없으면 병렬적으로 실행된다
  //const whitelistContract = await ethers.getContractFactory("Whitelist");가 끝나고 그 다음으로 다음 const depoloyedwhitelistConstract = await whitelistContract.deploy(10);
  //를 실행하기 위해서 async를 사용
  //그럼 하나가 실행이 끝날떄 까지 기다린다


  //스마트컨트랙트가 배포될때까지 대기(awiat)
  await depoloyedwhitelistConstract.deployed();

  //배포가 완료되면 로그창에 "Whitelist deployed to:" : 스컨주소 출력
  console.log("Whitelist deployed to:", depoloyedwhitelistConstract.address);
}

//main 함수를 실행
main()
  .then(() => process.exit(0)) // 함수가 정상적으로 실행되면 프로세스 정상종료 (0)으로 종료
  .catch(error => { // 함수가 실행중 에러가 나면
    console.error(error); // 콘솔창에 error 출력
    process.exit(1); // 프로세스 비정상종료 (1)으로 종료
  }
  )