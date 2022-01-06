<template>
  <div class='container'>
    <div class='form-style'>
      <el-form size='mini' :inline='true' :model='formData'>
        <el-form-item label='姓名：'>
          <el-input v-model='formData.name'></el-input>
        </el-form-item>
        <el-form-item label='年龄：'>
          <el-input v-model='formData.age'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click='handleSearch'>高级检索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-drawer
        title="高级检索"
        :visible.sync="drawer"
        :direction="direction"
        size="50%"
        :before-close="handleDrawerClose">
        <search-component :titleData='titleData'></search-component>
      </el-drawer>
    </div>
    <div>
      <el-table :data='tableData' border>
        <el-table-column prop='name' label='姓名'></el-table-column>
        <el-table-column prop='date' label='生日'></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import searchComponent from '../components/common/search/searchComponent'

export default {
    name: 'mainPage',
    components: { searchComponent },
    data: function() {
        return {
            // 表单
            formData: {
                name: '',
                age: ''
            },
            // 表格
            tableData: [
                {
                    name: '张张',
                    date: '2022-01-05'
                },
                {
                    name: '李李',
                    date: '2022-02-05'
                }
            ],
            drawer: false,
            direction: 'ltr',
            // 传给组件的数据
            titleData: [
                { type: 'text', name: '姓名：', show: '', placeholder: '请输入姓名', value: '', model: 'name' },
                { type: 'time', name: '日期：', show: '', placeholder: '', value: '', model: 'date' },
                { type: 'text', name: '电话：', show: '', placeholder: '请输入电话', value: '', model: 'phone' },
                { type: 'select', name: '转诊类别：', show: '', placeholder: '请选择转诊类别', select: '', value: '', model: 'transType' },
                { type: 'checkbox', name: '复选框：', show: '', placeholder: '', checkbox: [], value: '' }
            ],
            drawerForm: {
                name: '',
                age: ''
            }
        }
    },
    mounted() {
    },
    methods: {
        handleSearch() {
            // console.log(111111)
            this.drawer = true
        },
        handleDrawerClose() {
            this.drawer = false
        }
    }
}
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  width: 100%;
  background: floralwhite;
}
.form-style {
  padding: 20px;
}
</style>
