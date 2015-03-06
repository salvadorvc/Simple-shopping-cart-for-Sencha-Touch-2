Ext.define("Cart.view.Main", {
    extend: 'Ext.TabPanel',
    id: 'mainView',    
    
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.data.Store',
        'Ext.dataview.NestedList'
    ],

    config: {
        fullscreen: true,
        zIndex: 0,
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Shop',
                iconCls: 'home',
                
                layout: 'fit',
                items: [
                    {
                        xtype: 'nestedlist',
                        id: 'mainList',
                        store: 'Categories',
                        title: 'Hello Dude Shop',

                        toolbar: {
                            xtype: 'titlebar',
                            docked: 'top',
                            ui: 'light',
                            inline: true,

                            items: [
                                {
                                    xtype: 'cartbtn',
                                    align: 'right'
                                }
                            ]
                        },

                        listeners: {
                            leafitemtap: function() {
                                this.getDetailCard()
                                    .setStore(arguments[4].getProductsStore);
                            }
                        },

                        itemTpl: '<div>{text}</div>',

                        detailCard: {
                            xtype: 'list',
                            itemTpl: '<div style="display:inline-block; width: 100%;">' +
                                     '<img src="{img_tmb}" width="32" style="float: left; border-radius: 7px; margin-right: 5px;"/>' +
                                     '<span style="font-size: 1em;">{text}</span>' +
                                     '<div class="x-button" id="{id}" style="float: right; font-size: 0.7em; font-weight: bold; padding: 7px;">Add</div>' +
                                     '</div>',
                            disableSelection: true,
                            listeners: {
                                initialize: function() {
                                    var self = this.getId();
                                    Ext.get(self).on({
                                        tap: function(evt, dom) {
                                            Cart.add(dom.getAttribute('id'), 1);
                                        },
                                        delegate: '.x-button'
                                    });
                                }
                            }
                        }
                    }
                ]
            },

            {
                title: 'About',
                iconCls: 'info',
                layout: 'fit',
                padding: 4,
                styleHtmlContent: true,
                html: '<p><strong>Un simple carrito de compras para Smartphone</strong></p>' +
                      '<p>Version: 0.1</p>' +
                      '<p>Author: Salvador Villalobos, <a href="https://www.facebook.com/Larry.vks">My Facebook Profile</a></p>' +
                      '<p>License: GNU GPL v3.0</p>' +
                      '<p>E-mail: salvadorvc.89@gmail.com</p>',
                scrollable: 'vertical'
            }
        ]       
    }
});
