<!--  -->
<template>
    <div class='tinyBox'>
        <div class="rightBox">
            <textarea id="tiny"></textarea>
        </div>
        <div class="leftBox">
            <div class="silder_list">
                <div class="silder_label">产品标题：</div>
                <div class="silder_cont">
                    <el-input v-model="title"  style="width: 40%" placeholder="请输入内容"></el-input>
                </div>
            </div>


            
            <div class="silder_list">
                <div class="silder_label"></div>
                <div class="silder_cont">
                    <el-button type="primary" @click="addList">确定</el-button>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
var tinyID='tiny';
import { addNew } from '../../api/code'
export default {
name: '',
components: {},
data() {
return {
    max_height: '',
    title: '',
};
},
computed: {},
watch: {},
methods: {

    initFWB(){
        tinymce.init({
            selector: '#' + tinyID,
            language:'zh_CN',
            plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template  codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave  autoresize ',
            toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
            styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
            table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs ',
            height: this.max_height, //编辑器高度
            min_height: this.max_height,
            max_height: this.max_height,
            /*content_css: [ //可设置编辑区内容展示的css，谨慎使用
                '/static/reset.css',
                '/static/ax.css',
                '/static/css.css',
            ],*/
            branding: false,
            fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
            font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif',
            link_list: [
                { title: '预置链接1', value: 'http://www.tinymce.com' },
                { title: '预置链接2', value: 'http://tinymce.ax-z.cn' }
            ],
            image_list: [
                { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
                { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
            ],
            image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
            ],
            //importcss_append: true,
            //自定义文件选择器的回调内容
            file_picker_callback: function (callback, value, meta) {
                if (meta.filetype === 'file') {
                callback('https://www.baidu.com/img/bd_logo1.png', { text: 'My text' });
                }
                if (meta.filetype === 'image') {
                callback('https://www.baidu.com/img/bd_logo1.png', { alt: 'My alt text' });
                }
                if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.baidu.com/img/bd_logo1.png' });
                }
            },
            //为内容模板插件提供预置模板
            templates: [
                { title: '模板1', description: '介绍文字1', content: '模板内容' },
                { title: '模板2', description: '介绍文字2', content: '<div class="mceTmpl"><span class="cdate">CDATE</span>，<span class="mdate">MDATE</span>，我的内容</div>' }
            ],
            //content_security_policy: "script-src *;",
            extended_valid_elements:'script[src]',
            //
            template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
            autosave_ask_before_unload: false,
            toolbar_mode : 'wrap',
            automatic_uploads : false,
            images_upload_base_path: '/demo',
            images_upload_handler: function (blobInfo, succFun, failFun) {
                succFun('/demo/images/img.jpg');
            },
            //icons:'ax-color',
        });
        // let that = this;
        // setTimeout(() => {
        //     that.insertHTMLv5();
        // }, 1000);
    },
    getWebHeight(){
        let _heigh = document.documentElement.clientHeight - 90 -20
        console.log(_heigh)
        this.max_height = _heigh
        
        this.initFWB();
    },
    addList(){
        let contents = tinymce.editors[tinyID].getContent();
        let params = {
            title: this.title,
            synopsis: contents,
            content: '空内容',
            watchNum: 0,
            images: '图片集合',
            tags: '标签集合',
            url: '下载地址',
            // id: 1,
            // createTime: new Date()
        }
        addNew(params).then(res=>{
            console.log(res)
        })
    },
    
},
created() {

},
mounted() { 
    this.getWebHeight();
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.tinyBox{
    width: 100%;
    height: 100%; 
    display: flex;
    padding: 10px;
    justify-content: space-around;
    .leftBox{
        width: 30%;
        margin-left: 10px;
        min-width: 370px;
        background-color: #085dacc7;
        border-radius: 5px;
        color: #000;
        // margin-bottom: 10px;
        .silder_list{
            display: flex;
            align-items: center;
            margin: 10px 0px;
            color: #fff;
            .silder_label{
                width: 125px;
                font-size: 14px;
                text-align: end;
                padding-right: 10px;
            }
            .silder_cont{
                box-sizing: border-box;
                width: 100%;
                .silder_cont_ott{
                    box-sizing: border-box;
                    padding: 5px;
                    border: 1px solid #ccc;
                    
                    display: flex;
                    align-items: center;
                    .dayNum_zhi{
                        display: inline-block;
                        margin: 5px 0px;
                        margin-left: 20px;
                    }
                    .zhi_index{
                        display: inline-block;
                        margin-left: 20px;
                        color: #409EFF;
                    }
                }
                .el-checkbox-group{
                  .el-checkbox{
                    color: #fff !important;
                    .el-checkbox__label{
                      color: #fff;
                    }
                  }
                }
                .el-radio-group{
                  .el-radio{
                    color: #fff !important;
                  }
                }
            }
        }
    }

    .rightBox{
        width: 48%;
        min-width: 800px;
    }


    #tiny{
        width: 600px
        
    }
}
</style>
