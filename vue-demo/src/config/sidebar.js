let menusConfig = [
    {
        key: "service",
        title: "服务管理",
        icon: "fa fa-server",
        href: "",
        children: [
            {
                key: "service-list",
                title: "服务列表",
                href: "/service-list",
                icon: "fa fa-th-list",
                isShow: true
            },
            {
                key: "service-reg",
                title: "注册服务",
                href: "/service-reg",
                icon: "fa fa-pencil",
                isShow: false
            },
            {
                key: "service-edit",
                title: "编辑服务",
                href: "/service-edit",
                icon: "fa fa-pencil",
                isShow: false
            }
        ]
    },
    {
        key: "apidoc",
        title: "开发文档",
        href: "",
        icon: "fa fa-newspaper-o",
        children: [
            {
                key: "query-apidoc",
                title: "查看文档",
                href: "http://doc.kpaas.biaoxiaoxu.cn/",
                icon: "fa fa-map-o",
                isShow: true,
                newOpen: true
            },
            {
                key: "upload-apidoc",
                title: "上传文档",
                href: "/upload-apidoc",
                icon: "fa fa-upload",
                isShow: true
            }
        ]
    }
];

export default menusConfig