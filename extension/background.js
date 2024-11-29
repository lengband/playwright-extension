// 扩展安装或更新时触发
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);
  // 安装完成后自动打开扩展弹窗
  if (details.reason === 'install') {
    chrome.action.openPopup();
  }
});

// 当扩展加载完成时自动打开popup
// chrome.runtime.onStartup.addListener(() => {
//   chrome.action.openPopup();
// }); 