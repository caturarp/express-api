sequelize model:generate --name Role --attributes name:string

sequelize model:generate --name User --attributes name:string,username:string,password:string,roleId:integer

sequelize model:generate --name Card --attributes name:string,doc_type:string,journey_type:string,category:string,product_manager:string,waspang:string,status:string,due_date:date,task:string,cpmlexity:string,description:text,scrum_number:integer,sprint_number:integer,project_type:string,business_user:string,node_impacted:string,source:string,vendor_name:string,mandays:integer,methodolgyId:integer,listId:integer

sequelize model:generate --name Post --attributes title:string,content:text,userId:integer

sequelize model:generate --name Methodology --attributes name:string

sequelize model:generate --name Board --attributes name:string,memberId:integer

sequelize model:generate --name List --attributes name:string,boardId:integer

sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer