<template>
  <div>
    <div class='form-style'>
      <el-form size='mini' :inline='true' :model='drawerForm'>
        <el-form-item :label='item.name' v-for='item in titleData' :key='item.name'>
          <el-input
            v-if='item.type === "text"'
            clearable
            @change='changeInput(drawerForm.value)'
            :placeholder='item.placeholder'
            v-model='drawerForm[item.model]'>
          </el-input>
          <el-select
            v-if='item.type === "select"'
            filterable
            clearable
            :placeholder='item.placeholder'
            v-model='item.model'>
            <el-option
              v-for='item in options'
              :key='item.value'
              :label='item.label'
              :value='item.model'></el-option>
          </el-select>
          <time-filter
            v-if='item.type === "time"'
            :startTime="listQuery.startTime"
            :endTime="listQuery.endTime"
            @start="changeStart"
            @end="changeEnd"
          />
<!--          <el-checkbox-group v-model="drawerForm.checkbox">-->
<!--            <el-checkbox label="美食/餐厅线上活动" name="type" v-for='item in checkboxData'></el-checkbox>-->
<!--          </el-checkbox-group>-->
          <div></div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import timeFilter from '../timeFilter/index'

export default {
    // name: 'searchComponent',
    components: { timeFilter },
    props: {
        titleData: {
            type: Array
            // default: []
        }
    },
    data: function() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            drawerForm: {
                name: '',
                age: ''
            },
            listQuery: {
                startTime: '',
                endTime: ''
            }
        }
    },
    created() {
        // console.log(this.titleData, '8888888888')
        this.titleData.forEach(val => {
            this.drawerForm[val.model] = ''
        })
        console.log(this.drawerForm, '{{{{{{{{{{{{{{{')
    },
    mounted() {
    },
    methods: {
        changeStart(e) {
            // console.log(e, '---------')
            this.listQuery.startTime = e
        },
        changeEnd(e) {
            // console.log(e, 'eeeeeeeeend')
            this.listQuery.endTime = e
        },
        changeInput(val) {
            console.log(val, '++++++++')
            console.log(this.titleData, '++======++')
        }
    }
}
</script>

<style lang='scss' scoped>
.form-style {
  margin: 0 20px;
  border: darkblue 1px solid;
}
</style>
