var index = {
    grid: $('#grid'),
    initGrid: function () {
        index.grid.bootstrapTable({
            //url:'http://localhost/aspnet/Employees/Handlers/GetAll.ashx',
            url: 'data_page_client.json',
            //method: 'get',
            cache: false,
            //dataField: 'rows',
            striped: true,
            clickToSelect: true,
            pagination: true,
            sidePagination: 'client',
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            queryParams: function (params) {
                //获取查询条件
                //$('#j_serach').getSearchParams(params);
                return params;
            },
            idField: 'Id',
            uniqueId: 'Id',
            contentType: 'text/plain',
            dataType: 'json',
            height: 600,
            rowStyle: function (value, row, index) {
                return {
                    //classes: 'text-nowrap another-class',
                    css: { "vertical-align": "middle" }
                };
            },
            columns: [
                { checkbox: true, align: 'center' },
                { field: 'Id', title: '雇员ID', align: 'center'},
                { field: 'Code', title: '编号', align: 'center', editable: true },
                { field: 'Name', title: '姓名', align: 'center' },
                { field: 'Gender', title: '性别', align: 'center' },
                { field: 'BirthDay', title: '出生日期', align: 'center' },
                { field: 'Age', title: '年龄', align: 'center' },
                { field: 'Salary', title: '薪资', align: 'center' },
                { field: 'Org', title: '所属组织Id', align: 'center' },
                { field: 'OrgName', title: '所属组织', align: 'center' },
                {
                    field: 'opt',
                    title: '操作',
                    align: 'center',
                    width: 160,
                    formatter: function (value, row, rowIndex) {
                        var strHtml = '<a href="javascript:void(0);" class="btn btn-primary">修改</a><a href="javascript:void(0);" onclick="javascript:void(0)" class="btn btn-danger">删除</a>';
                        //if (row.status == '新建') {
                        //    strHtml += ' <a href="javascript:void(0);" onclick="javascript:void(0)" class="btn btnprimary">审核</a>';
                        //}
                        return strHtml;
                    }
                }
            ]
        });
    }
};