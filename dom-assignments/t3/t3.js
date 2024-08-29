function getBrowserType() {
    const test = regexp => {
      return regexp.test(navigator.userAgent);
    };
  
    console.log(navigator.userAgent);
  
    if (test(/opr\//i) || !!window.opr) {
      return 'Opera';
    } else if (test(/edg/i)) {
      return 'Microsoft Edge';
    } else if (test(/chrome|chromium|crios/i)) {
      return 'Google Chrome';
    } else if (test(/firefox|fxios/i)) {
      return 'Mozilla Firefox';
    } else if (test(/safari/i)) {
      return 'Apple Safari';
    } else if (test(/trident/i)) {
      return 'Microsoft Internet Explorer';
    } else if (test(/ucbrowser/i)) {
      return 'UC Browser';
    } else if (test(/samsungbrowser/i)) {
      return 'Samsung Browser';
    } else {
      return 'Unknown browser';
    }
  }

  function detectOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}
  
const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};


let userOS = detectOS();
console.log("The user's operating system is: " + userOS);

  const browserType = getBrowserType();
  
  console.log(browserType);
  
  
var target = document.getElementById("target");
let navigatorObj = navigator;
let userAgent = navigatorObj.userAgent;
target.insertAdjacentHTML("beforeend",`<p>${browserType}</p>`);
target.insertAdjacentHTML("beforeend",`<p>${userAgent}</p>`);
target.insertAdjacentHTML("beforeend",`<p>${userOS} ${navigator.platform}</p>`);
target.insertAdjacentHTML("beforeend",`<p>Screen width: ${screen.width}px Screen height: ${screen.height}px</p>`);
target.insertAdjacentHTML("beforeend",`<p>Screen width available: ${screen.availWidth}px Screen height available: ${screen.availHeight}px</p>`);
target.insertAdjacentHTML("beforeend",`<p>${date.toLocaleDateString('fi-FI', options)}</p>`);
target.insertAdjacentHTML("beforeend",`<p>Time: ${date.getHours()}:${date.getMinutes()}</p>`);

