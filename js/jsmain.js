// 初始化、渲染、交互逻辑
let scene, camera, renderer, boxGroup, itemsGroup;
// ... (保留你原来的 init, animate 函数)

// 升级点：自动保存数据到 LocalStorage
function saveData() {
    const data = {
        boxL: document.getElementById('boxL').value,
        boxW: document.getElementById('boxW').value,
        itemL: document.getElementById('itemL').value,
        // ... 其他参数
    };
    localStorage.setItem('stack_config', JSON.stringify(data));
}

function loadData() {
    const saved = localStorage.getItem('stack_config');
    if (saved) {
        const data = JSON.parse(saved);
        // 自动填回输入框
    }
}

// 绑定事件
document.getElementById('calcBtn').onclick = () => {
    saveData(); // 每次计算自动保存
    updateAndRender();
};