<template>
    <el-form ref="localform" label-width="100px" :model="localform" :inline="localinline">
        <el-form-item v-for="item in localformLabel" :key="item.label" :label="item.label" >
            <el-input 
                v-if="item.type === 'input'"
                v-model="localformLabel[item.model]" 
                :placeholder="'请输入' + item.label"
            ></el-input>
            <el-switch v-if="item.type === 'switch'" v-model="localformLabel[item.model]" ></el-switch>
            <el-date-picker 
                v-if="item.type === 'date'" 
                v-model="localformLabel[item.model]" 
                type="date"
                value-format="yyyy-MM-dd" 
                placeholder="选择日期时间"
            ></el-date-picker>
            <el-select 
                v-if="item.type === 'select'" 
                v-model="localformLabel[item.model]" 
                placeholder="请选择性别"
                >
                <el-option 
                    v-for="sexitem in item.opts" 
                    :key="sexitem.value" 
                    :label="sexitem.label" 
                    :value="sexitem.value"
                ></el-option>
            </el-select>
            <el-form-item></el-form-item>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    props:{
        formLabel:Array,
        form:Object,
        inline:Boolean
},
    data() {
        return {
            localformLabel: this.formLabel,
            localform: this.form,
            localinline: this.inline
        }
    },

}
</script>

<style>

</style>