var treeviewExt = {
    tree: undefined,
    dataId: '',
    dataUrl: '',
    getTreeData: function() {
        var treeData;
        $.ajax({
            url: treeviewExt.dataUrl,
            type: 'get',
            async: false,//ͬ同步
            dataType: 'json',
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('加载tree数据源失败！' + textStatus + ',' + errorThrown);
            },
            success: function(data, textStatus, jqXHR) {
                treeData = data;
            }
        });
        return treeData;
    },
    initTree: function(options) {
        treeviewExt.tree = $('#' + options.treeId);
        treeviewExt.dataId = options.dataId;
        treeviewExt.dataUrl = options.dataUrl;

        treeviewExt.tree.treeview({
            data: treeviewExt.getTreeData(),
            showIcon: false,
            showCheckbox: true,
            onNodeChecked: function(event, node) {
                // console.log(node);
                //设置子节点
                treeviewExt.checkSubNodes(node, true);
                //设置父节点
                treeviewExt.checkParent(node);
            },
            onNodeUnchecked: function(event, node) {
                //设置子节点
                treeviewExt.checkSubNodes(node, false);
                //设置父节点
                treeviewExt.checkParent(node);
            }
        });
    },
    //选中子节点
    checkSubNodes: function(node, check) {
        if (node.nodes && node.nodes.length > 0) {
            $(node.nodes).each(function(idx, subNode) {
                if (check) {
                    treeviewExt.tree.treeview('checkNode', [subNode.nodeId, { silent: true }]);
                } else {
                    treeviewExt.tree.treeview('uncheckNode', [subNode.nodeId, { silent: true }]);
                }
                treeviewExt.checkSubNodes(subNode, check);
            });
        }
    },
    //选中父节点
    checkParent: function(node) {
        var parent = treeviewExt.tree.treeview('getParent', node);
        // console.log(parent);
        if (parent == undefined || parent.state == undefined) {
            return;
        }

        //1、当前节点被选中，则上级节点选中
        if (node.state.checked == true) {
            if (parent.state.checked == false) {
                treeviewExt.tree.treeview('checkNode', [parent.nodeId, { silent: true }]);
                //递归设置上级节点
                treeviewExt.checkParent(parent);
            }
            return;
        }

        //node.state.checked == false
        //2、所有兄弟节点都未选中，则上级节点未选中
        var siblings = treeviewExt.tree.treeview('getSiblings', node);
        var checkedSiblingsExists = false;//是否存在选中的兄弟节点
        if (siblings && siblings.length > 0) {
            if ($.grep(siblings, function(sib, idx) {
                return sib.state.checked == true;
            }).length > 0) {
                //
                checkedSiblingsExists = true;
            }
        }
        if (checkedSiblingsExists == false) {
            if (parent.state.checked == true) {
                treeviewExt.tree.treeview('uncheckNode', [parent.nodeId, { silent: true }]);
                //递归设置上级节点
                treeviewExt.checkParent(parent);
            }
        }
    },
    //全选
    checkAll: function() {
        treeviewExt.tree.treeview('checkAll', { silent: true });
       var node= treeviewExt.tree.treeview('getNode',1);
       console.log(node);
       
    },
    //全不选
    uncheckAll: function() {
        treeviewExt.tree.treeview('uncheckAll', { silent: true });
    },
    //全部展开
    expandAll: function() {
        treeviewExt.tree.treeview('expandAll', { silent: true });
    },
    //全部折叠
    collapseAll: function() {
        treeviewExt.tree.treeview('collapseAll', { silent: true });
    },
    //获取选中节点数据id数组
    getCheckedDataIds: function() {
        var sel = treeviewExt.tree.treeview('getChecked');
        // console.log(sel.length);
        var selIds = [];
        if (sel && sel.length > 0) {
            $(sel).each(function(idx, item) {
                selIds.push(item[treeviewExt.dataId]);
            });
        }
        return selIds;
    }
}