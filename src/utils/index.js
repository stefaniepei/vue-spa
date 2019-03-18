export class Utils {
  checkIsPc() {
    const userAgentInfo = navigator.userAgent
    const agentList = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod' ]
    let flag = true
    for (let i = 0; i < agentList.length; i++) {
      if (userAgentInfo.indexOf(agentList[i]) > 0) {
        flag = false
        break
      }
    }
    return flag
  }

}