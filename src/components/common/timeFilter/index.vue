<template>
  <div class="container-timefilter">
    <el-date-picker
      :type="dateTime ? 'datetime' : 'date'"
      v-model="startTime"
      placeholder="开始时间"
      :format="dateTime?'yyyy-MM-dd HH:mm:ss':'yyyy-MM-dd'"
      :value-format="dateTime?'yyyy-MM-dd HH:mm:ss':'yyyy-MM-dd'"
      :size="size"
      @change="onChangeStart"
      :picker-options="pickerOptions"
    ></el-date-picker>
    -
    <el-date-picker
      :type="dateTime ? 'datetime' : 'date'"
      v-model="endTime"
      placeholder="结束时间"
      :format="dateTime?'yyyy-MM-dd HH:mm:ss':'yyyy-MM-dd'"
      :value-format="dateTime?'yyyy-MM-dd HH:mm:ss':'yyyy-MM-dd'"
      :size="size"
      @change="onChangeEnd"
      :picker-options="pickerOptions"
    ></el-date-picker>
  </div>
</template>

<script>
import { getTime } from './timeMethods'

export default {
    props: {
        dateTime: {
            type: Boolean,
            default: false
        },
        startTime: {
            type: String,
            default: getTime().oneMonthAgo
        },
        endTime: {
            type: String,
            default: getTime().currentDay
        },
        size: {
            type: String,
            default: 'mini'
        },
        pickerOptions: {},
        labelWidth: {
            type: String,
            default: '70px'
        },
        padding: {
            type: String,
            default: '0'
        }
    },
    methods: {
        onChangeStart(e) {
            // let startTimeStamp = new Date(e).getTime();
            // let endTimeStamp = new Date(this.endTime).getTime();
            // if (startTimeStamp > endTimeStamp) {
            //   this.$message("起始日期不得晚于结束日期");
            // }
            this.$emit('start', e)
        },
        onChangeEnd(e) {
            // let startTimeStamp = new Date(this.startTime).getTime();
            // let endTimeStamp = new Date(e).getTime();
            // if (startTimeStamp > endTimeStamp) {
            //   this.$message("结束日期不得早于起始日期");
            // }
            this.$emit('end', e)
        }
    }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 173px !important;
}
.title-label {
  display: inline-block;
  text-align: right;
  color: #606266;
  font-size: 14px;
  font-weight: bold;
}
</style>
