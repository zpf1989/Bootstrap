var index = {
    grid: $('#grid'),
    initGrid: function () {
        index.grid.bootstrapTable({
            url:'http://localhost/aspnet/Employees/Handlers/GetAll.ashx',
            // url:'data.json',
            // url: 'http://localhost:2690/Employees/Handlers/GetAll.ashx',
            method:'post',
            cache:false,
            dataField:'rows',
            pagination:true,
            sidePagination: 'server',
            pageNumber:1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            uniqueId: 'Id',
            contentType:'text/plain',
            dataType:'jsonp',//jsonp，实现跨域访问
             height: 500,
            columns: [
                { checkbox: true },
                { field: 'Id', title: '雇员ID' },
                { field: 'Code', title: '编号' },
                { field: 'Name', title: '姓名' },
                { field: 'Gender', title: '性别' },
                { field: 'BirthDay', title: '出生日期' },
                { field: 'Age', title: '年龄' },
                { field: 'Salary', title: '薪资' },
                { field: 'Org', title: '所属组织Id' },
                { field: 'OrgName', title: '所属组织' }
            ],
    //         data:[
    //     {
    //         "Id": "001",
	// 		"Code": "zs001",
	// 		"Name": "张三001",
	// 		"Gender": "1",
	// 		"Age": "24",
	// 		"BirthDay": "2016-05-17 23:59:55",
	// 		"Salary": "4500.23",
	// 		"Org": "01",
	// 		"OrgName": "人事部"
    //     }
    // ]
            
        });
    }
};