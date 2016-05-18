var index = {
    grid: $('#grid'),
    initGrid: function () {
        index.grid.bootstrapTable({
            url: 'http://localhost/aspnet/Employees/Handlers/GetAll.ashx',
            //url: 'data_page_client.json',
            method: 'get',
            cache: false,
            dataField: 'rows',
            editable: true,
            striped: true,
            clickToSelect: true,
            pagination: true,
            sidePagination: 'server',
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            queryParamsType: 'page',
            queryParams: function (params) {
                //获取查询条件
                //$('#j_serach').getSearchParams(params);
                return params;
            },
            idField: 'Id',
            uniqueId: 'Id',
            //contentType: 'text/plain',
            dataType: 'json',
            height: 700,
            rowStyle: function (value, row, index) {
                return {
                    //classes: 'text-nowrap another-class',
                    css: { "vertical-align": "middle", "max-height": "40" }
                };
            },
            columns: [
                { checkbox: true, align: 'center', valign: 'middle' },
                { field: 'Id', title: '雇员ID', align: 'center' },
                { field: 'Code', title: '编号', align: 'center' },
                {
                    field: 'Name', title: '姓名', align: 'center', editable: true, width: 100,
                    rowStyle: function (value, row, index) {
                        return {
                            css: { 'overflow': 'hidden', 'white-space': 'nowrap', 'text-overflow': 'ellipsis' }
                        };
                    }
                },
                {
                    field: 'Gender', title: '性别', align: 'center',
                    edit: {
                        type: 'select',//下拉框，如果是下拉则需要设置type为select
                        //url:'user/getUser.htm',//从服务器加载
                        data: [{ id: 1, text: '男' }, { id: 0, text: '女' }],
                        valueField: 'id',
                        textField: 'text',
                        onSelect: function (val, rec) {
                            console.log(val, rec);
                        }
                    }
                },
                { field: 'BirthDay', title: '出生日期', align: 'center',width:180 },
                { field: 'Age', title: '年龄', align: 'center' },
                { field: 'Salary', title: '薪资', align: 'center' },
                { field: 'Org', title: '所属组织Id', align: 'center' },
                {
                    field: 'OrgName', title: '所属组织', align: 'center'
                },
                {
                    field: 'opt',
                    title: '操作',
                    align: 'center',
                    width: 160,
                    // formatter: function (value, row, rowIndex) {
                    //     var strHtml = '<a href="javascript:void(0);" onclick="index.editRow(this)" class="btn btn-primary">修改</a><a href="javascript:void(0);" onclick="javascript:void(0)" class="btn btn-danger">删除</a>';
                    //     //if (row.status == '新建') {
                    //     //    strHtml += ' <a href="javascript:void(0);" onclick="javascript:void(0)" class="btn btnprimary">审核</a>';
                    //     //}
                    //     return strHtml;
                    // }
                }
            ]
        });
    },
    editRow: function (target) {
        alert('edit');
        // index.grid.bootstrapTable('editable', target);
        index.grid.editable({ disabled: false });
    }
};