Search.setIndex({docnames:["api","index"],envversion:50,filenames:["api.rst","index.rst"],objects:{"":{esser:[0,0,0,"-"]},"esser.entities":{Entity:[0,1,1,""]},"esser.entities.Entity":{INITIAL_VERSION:[0,2,1,""],aggregate_name:[0,2,1,""],current_state:[0,2,1,""],generate_new_guid:[0,3,1,""],get_initial_state:[0,3,1,""],get_last_aggregate_version:[0,3,1,""],get_last_snapshot:[0,3,1,""],get_state_at:[0,3,1,""],repository_class:[0,2,1,""]},"esser.events":{BaseEvent:[0,1,1,""],CreateEvent:[0,1,1,""],DeleteEvent:[0,1,1,""]},"esser.events.BaseEvent":{attach_entity:[0,3,1,""],event_name:[0,2,1,""],get_aggregate_key:[0,3,1,""],persist:[0,3,1,""],save:[0,3,1,""]},"esser.events.CreateEvent":{get_aggregate_key:[0,3,1,""],save:[0,3,1,""]},"esser.events.DeleteEvent":{event_name:[0,2,1,""]},"esser.exceptions":{AggregateDoesNotExist:[0,4,1,""],EventValidationException:[0,4,1,""],IntegrityError:[0,4,1,""]},"esser.models":{Event:[0,1,1,""],Snapshot:[0,1,1,""]},"esser.models.Event":{DoesNotExist:[0,4,1,""],Meta:[0,1,1,""],aggregate_id:[0,2,1,""],aggregate_name:[0,2,1,""],created_at:[0,2,1,""],event_data:[0,2,1,""],event_type:[0,2,1,""],guid:[0,2,1,""]},"esser.models.Event.Meta":{base_backoff_ms:[0,2,1,""],host:[0,2,1,""],max_retry_attempts:[0,2,1,""],region:[0,2,1,""],request_timeout_seconds:[0,2,1,""],session_cls:[0,2,1,""],table_name:[0,2,1,""]},"esser.models.Snapshot":{DoesNotExist:[0,4,1,""],Meta:[0,1,1,""],aggregate_key:[0,2,1,""],aggregate_name:[0,2,1,""],created_at:[0,2,1,""],from_aggregate:[0,5,1,""],get_last_for:[0,5,1,""],state:[0,2,1,""]},"esser.models.Snapshot.Meta":{base_backoff_ms:[0,2,1,""],host:[0,2,1,""],max_retry_attempts:[0,2,1,""],region:[0,2,1,""],request_timeout_seconds:[0,2,1,""],session_cls:[0,2,1,""],table_name:[0,2,1,""]},"esser.reducer":{BaseReducer:[0,1,1,""]},"esser.reducer.BaseReducer":{on_attribute_deleted:[0,3,1,""],on_created:[0,3,1,""],on_deleted:[0,3,1,""],on_updated:[0,3,1,""],reduce:[0,3,1,""],update_version:[0,3,1,""]},"esser.repositories":{base:[0,0,0,"-"],mixins:[0,0,0,"-"]},"esser.repositories.base":{DynamoDBRepository:[0,1,1,""]},"esser.repositories.mixins":{ReadMixin:[0,1,1,""],WriteMixin:[0,1,1,""]},"esser.repositories.mixins.ReadMixin":{get_all_events:[0,3,1,""],get_events:[0,3,1,""],get_last_event:[0,3,1,""]},"esser.repositories.mixins.WriteMixin":{persist:[0,3,1,""]},esser:{exceptions:[0,0,0,"-"],models:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:exception","5":"py:classmethod"},terms:{"class":[0,1],"default":0,"function":1,"new":0,aggreg:1,aggregate_id:0,aggregate_kei:0,aggregate_nam:0,aggregatedoesnotexist:0,alia:0,all:0,allow:0,attach:0,attach_ent:0,attr:0,attribut:0,base:0,base_backoff_m:0,baseev:0,basereduc:0,befor:0,caus:0,classmethod:0,cover:0,creat:0,created_at:0,createev:0,current_st:0,data:1,datetim:0,decid:0,deleteev:0,develop:1,document:0,doesnotexist:0,duplic:0,dynamodb:0,dynamodbrepositori:0,east:0,entiti:1,error:0,esser:0,event:1,event_data:0,event_nam:0,event_typ:0,eventvalidationexcept:0,except:1,from_aggreg:0,gener:0,generate_new_guid:0,get:0,get_aggregate_kei:0,get_all_ev:0,get_ev:0,get_initial_st:0,get_last_aggregate_vers:0,get_last_ev:0,get_last_for:0,get_last_snapshot:0,get_state_at:0,guid:0,hash:0,hash_kei:0,host:0,how:0,http:0,increment:0,index:1,inform:1,initial_vers:0,input:0,integrityerror:0,interfac:1,kei:0,latest:0,look:1,max_retry_attempt:0,messag:0,meta:0,method:1,mixin:0,model:0,modul:1,msg:0,name:0,next_ev:0,none:0,on_attribute_delet:0,on_creat:0,on_delet:0,on_upd:0,overrid:0,page:1,part:[0,1],persist:1,rang:0,range_kei:0,readmixin:0,reduc:1,region:0,repositori:1,repository_class:0,repres:0,request_timeout_second:0,save:0,search:1,session:0,session_cl:0,snapshot:0,sourc:0,specif:[0,1],state:0,store:0,table_nam:0,thi:[0,1],unicod:0,update_vers:0,using:0,utc:0,uuid:0,valid:0,version:0,writemixin:0,you:1},titles:["Developer Interface","esser - [E]vent [S]ourcing [Ser]verlessly"],titleterms:{The:1,aggreg:0,api:1,data:0,develop:0,document:1,entiti:0,esser:1,event:0,except:0,guid:1,indic:1,interfac:0,ourc:1,persist:0,reduc:0,repositori:0,ser:1,tabl:1,vent:1,verlessli:1}})