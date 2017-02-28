import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-ng2',
    templateUrl: 'angular2.html'
})
export class Angular2Component implements OnInit {

  menus:any;

  constructor() { }

  ngOnInit() {
    this.menus=[
      // {
      //   "name": 'UI Platform of Angular2',
      //   "router": '/component/introduce'
      // },
      // {
      //   "name": '快速上手',
      //   "router": '/component/quickstart'
      // },
      {
        "name": 'ng2',
        "components":[
          {
            'group':'布局',
            'children':[
              {
                us_name:'Grid',
                zh_name: '栅格',
                router: '/component/grid'
              }
            ]
          },
          {
            'group':'表单',
            'children':[
              {
                us_name:'Label',
                zh_name: '标签',
                router: '/component/label'
              },
              {
                us_name:'InputText',
                zh_name: '文本框',
                router: '/component/inputtext'
              },
              {
                us_name:'InputTextArea',
                zh_name: '多行文本框',
                router: '/component/inputtextarea'
              },
              {
                us_name:'Password',
                zh_name: '密码框',
                router: '/component/password'
              },
              {
                us_name:'Button',
                zh_name: '按钮',
                router: '/component/button'
              },
              {
                us_name:'AutoComplete',
                zh_name: '模糊匹配',
                router: '/component/autocomplete'
              },
              {
                us_name:'Checkbox',
                zh_name: '复选框',
                router: '/component/checkbox'
              },
              {
                us_name:'Dropdown',
                zh_name: '下拉单选',
                router: '/component/dropdown'
              },
              {
                us_name:'MultiSelect',
                zh_name: '下拉多选',
                router: '/component/multiselect'
              },
              {
                us_name:'Calendar',
                zh_name: '日期选择器',
                router: '/component/calendar'
              },
              {
                us_name:'TreeSelect',
                zh_name: '树型选择框',
                router: '/component/treeselect'
              },
              {
                us_name:'Validation',
                zh_name: '校验提示',
                router: '/component/validation'
              }
            ]
          },
          {
            'group':'容器',
            'children':[
              {
                us_name:'Form',
                zh_name: '',
                router: '/component/form'
              },
              {
                us_name:'Outlet',
                zh_name: '',
                router: '/component/outlet'
              },            {
                us_name:'Panel',
                zh_name: '面板',
                router: '/component/panel'
              },            {
                us_name:'TabView',
                zh_name: '多标签',
                router: '/component/tabview'
              },
              {
                us_name:'Fieldset',
                zh_name: '控件组',
                router: '/component/fieldset'
              }
            ]
          },
          {
            'group':'数据',
            'children':[
              {
                us_name:'DataTable',
                zh_name: '表格',
                router: '/component/datatable'
              },
              {
                us_name:'SimpleColumn',
                zh_name: '',
                router: '/component/simplecolumn'
              },
              {
                us_name:'ComplexColumn',
                zh_name: '',
                router: '/component/complexColumn'
              },
              {
                us_name:'PickList',
                zh_name: '双向选择器',
                router: '/component/picklist'
              },
              {
                us_name:'TreeTable',
                zh_name: '树型表格',
                router: '/component/treetable'
              }
            ]
          },
          {
            'group':'对话框',
            'children':[
              {
                us_name:'Growl',
                zh_name: '全局消息框',
                router: '/component/growl'
              },
              {
                us_name:'ConfirmDialog',
                zh_name: '确认信息框',
                router: '/component/confirmdialog'
              },
              {
                us_name:'DialogWindow',
                zh_name: '页面弹框',
                router: '/component/dialogwindow'
              },
              {
                us_name:'OverlayPanel',
                zh_name: '浮层面板',
                router: '/component/overlaypanel'
              }
            ]
          },
          {
            'group':'拓展',
            'children':[
              {
                us_name:'Tree',
                zh_name: '树型视图',
                router: '/component/tree'
              },
              {
                us_name:'ContextMenu',
                zh_name: '右键菜单',
                router: '/component/contextmenu'
              }
            ]
          },
          {
            'group':'HTML',
            'children':[
              {
                us_name:'Html',
                zh_name: '原生标签',
                router: '/component/html'
              }
            ]
          }
        ]
      }
    ];

  }

}
