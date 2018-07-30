
// app: 控制你的应用程序的事件生命周期
// BrowserWindow: 创建和控制浏览器窗口
import { app, BrowserWindow } from 'electron'

// 保持窗口对象的全局引用，如果没有,
// 则当JavaScript对象被垃圾回收时，窗口将自动关闭
let mainWindow = null

const createMainWindow = () => {
  // 创建浏览器窗口
  const win = new BrowserWindow()
  const port = process.env.ELECTRON_WEBPACK_WDS_PORT
  win.loadURL(`http://localhost:${port}`)
  return win
}

// Electron 会在初始化后并
// 准备创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', () => {
  mainWindow = createMainWindow()
})
