import { Graph, Shape, ObjectExt } from '@antv/x6'
const { Rect } = Shape

export async function initBaseNode() {
  class BaseNode extends Rect {
  }

  BaseNode.config({
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'text',
        selector: 'label'
      },
      {
        tagName: 'image',
        selector: 'logo'
      }
    ],
    attrs: {
      body: {
        fill: '#fff',
        strokeWidth: 1,
        stroke: '#ddd'
      },
      label: {
        fontSize: 14,
        fill: '#222',
        textAnchor: 'left',
        refX: 50
      },
      logo: {
        width: 40,
        height: 40,
        refX: 0
      }
    },
    ports: {
      groups: {
        in: {
          attrs: {
            circle: {
              r: 5,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          },
          position: {
            name: 'absolute'
          }
        },
        out: {
          attrs: {
            circle: {
              r: 5,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          },
          position: {
            name: 'absolute'
          }
        }
      },
      items: [
        // {
        //   id: 'port1',
        //   group: 'common',
        //   args: { x: 0, y: 0 }
        // },
        {
          id: 'in',
          group: 'in',
          args: { x: 0, y: 20 }
        },
        // {
        //   id: 'port3',
        //   group: 'common',
        //   args: { x: 0, y: 40 }
        // },
        // {
        //   id: 'port4',
        //   group: 'common',
        //   args: { x: 75, y: 0 }
        // },
        // {
        //   id: 'port5',
        //   group: 'common',
        //   args: { x: 75, y: 40 }
        // },
        // {
        //   id: 'port6',
        //   group: 'common',
        //   args: { x: 150, y: 0 }
        // },
        {
          id: 'port7',
          group: 'out',
          args: { x: 150, y: 20 }
        }
        // {
        //   id: 'port8',
        //   group: 'common',
        //   args: { x: 150, y: 40 }
        // }
      ]
    },
    propHooks: {
      labelRefX(metadata) {
        const { labelRefX, ...others } = metadata
        if (labelRefX) {
          ObjectExt.setByPath(others, 'attrs/label/labelRefX', labelRefX)
        }
        return others
      },
      logo(metadata) {
        const { logo, ...others } = metadata
        if (logo) {
          ObjectExt.setByPath(others, 'attrs/logo/xlink:href', logo)
        }
        return others
      }
    }
  })
  Graph.registerNode('BaseNode', BaseNode)
}

