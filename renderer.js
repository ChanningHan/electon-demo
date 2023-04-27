const titleEl = document.createElement('h1')
titleEl.textContent = 'Hola'
document.body.appendChild(titleEl)

const informationEl = document.querySelector('#version-info')
informationEl.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const testPing = async () => {
    const res = await versions.ping();
    console.log(res)
    const pingEl = document.createElement('h1')
    pingEl.textContent = res
    document.body.appendChild(pingEl)
}
testPing()
