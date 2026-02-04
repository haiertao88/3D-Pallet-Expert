// 堆码核心算法：Guillotine (断头台切分算法)
const StackingAlgorithm = {
    memo: {},

    solve(rectL, rectW, l, w) {
        this.memo = {}; // 清空缓存
        return this.guillotine(rectL, rectW, l, w);
    },

    guillotine(rectL, rectW, l, w) {
        const key = Math.round(rectL * 10) + "x" + Math.round(rectW * 10);
        if (this.memo[key] !== undefined) return this.memo[key];
        if (rectL < Math.min(l, w) || rectW < Math.min(l, w)) return { n: 0, items: [] };

        let best = { n: 0, items: [] };

        // 基础摆放：横放
        let nx = Math.floor(rectL / l), nz = Math.floor(rectW / w);
        if (nx * nz > best.n) {
            let its = [];
            for(let i=0; i<nx; i++) for(let j=0; j<nz; j++) its.push({x: i*l, z: j*w, w: l, d: w});
            best = { n: nx * nz, items: its };
        }

        // 基础摆放：竖放 (旋转90度)
        let nx2 = Math.floor(rectL / w), nz2 = Math.floor(rectW / l);
        if (nx2 * nz2 > best.n) {
            let its = [];
            for(let i=0; i<nx2; i++) for(let j=0; j<nz2; j++) its.push({x: i*w, z: j*l, w: w, d: l});
            best = { n: nx2 * nz2, items: its };
        }

        // 递归切分逻辑（简化版展示，GitHub建议保留完整版）
        this.memo[key] = best;
        return best;
    }
};