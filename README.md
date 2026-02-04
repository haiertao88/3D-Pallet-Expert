# 📦 3D Smart Stacking Expert (V8.3 Pro)

![License](https://img.shields.io/badge/license-MIT-blue)
![Three.js](https://img.shields.io/badge/Three.js-r128-green)

**3D 智能堆码专家** 是一款基于 Three.js 构建的交互式物流可视化工具。它可以帮助工程师计算最优装箱排列，实时模拟纸箱开启、膨胀和外观贴图。

[English](README_EN.md) | [在线演示 (Demo)](#)

## ✨ 核心特性
- 🚀 **终极排列算法 (V8.1+)**: 基于 Guillotine 递归算法，寻找最优空间利用率。
- 📦 **物理仿真模拟**: 支持“外径/内径”切换，并引入了**纸箱膨胀系数 (Bulge Value)** 补偿。
- 🎨 **动态贴图系统**: 可自定义上传 Logo 与侧边标签，支持 3D 空间内的自由平移与缩放 (W/E 键切换)。
- 🌈 **分层可视化**: 自动对不同层级的货物进行对比色渲染，清晰展示堆叠结构。

## 🛠️ 技术栈
- **Engine**: Three.js (WebGL)
- **Controls**: OrbitControls (视角), TransformControls (交互)
- **Algorithm**: Recursive Guillotine Search (递归切分搜索)

## 🚀 快速开始
1. 克隆项目：`git clone https://github.com/your-username/3D-Pallet-Expert.git`
2. 直接在浏览器打开 `index.html`。
3. **快捷键**:
   - `W`: 切换到平移模式（移动 Logo/标签）
   - `E`: 切换到缩放模式
   - `Enter`: 在输入框按下可立即重新计算

## 📄 开源协议
本项目采用 [MIT](LICENSE) 协议开源。