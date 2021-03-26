import { Graph, Path } from '@antv/x6'

export async function initBezierEdge() {
  // 定义边
  Graph.registerConnector(
    'BezierEdge',
    (source, target) => {
      // 控制箭头方向
      const offset = 0
      // 控制曲率
      const control = 80
      // 连接点半径
      const r = 5
      const v1 = { x: source.x + offset + control, y: source.y }
      const v2 = { x: target.x - offset - control, y: target.y }
      return Path.normalize(
        `M ${source.x} ${source.y - r}
       L ${source.x} ${source.y + offset - r}
       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${target.x} ${target.y - offset}
       L ${target.x} ${target.y}
      `,
      )
    },
    true,
  )
}

