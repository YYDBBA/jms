<template>
  <div class="nav-menu">
    <el-tabs :tab-position="tabPosition" style="width: 90%; height: 500px;">
      <el-tab-pane label="用户信息">
        <el-container>
          <el-input placeholder="请输入" clearable size="mini" style="width: 200px;"></el-input>
          <el-button class="el-icon-search" size="mini">搜索</el-button>
          <el-button class="el-icon-edit" size="mini" @click="addInfo">添加</el-button>
          <el-dialog title="添加一条用户" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="name"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="pwd"></el-input>
              </el-form-item>
              <el-form-item label="生日" :label-width="formLabelWidth">
                <el-input v-model="bath"></el-input>
              </el-form-item>
              <el-form-item label="职业" :label-width="formLabelWidth">
                <el-input v-model="major"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addSuc">确 定</el-button>
            </div>
          </el-dialog>
        </el-container>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="id"
            width="180">
            <template slot-scope="scope">
              {{ scope.row.userId }}
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              {{ scope.row.userName }}
            </template>
          </el-table-column>
          <el-table-column
            label="密码"
            width="180">
            <template slot-scope="scope">
              {{ scope.row.userPwd }}
            </template>
          </el-table-column>
          <el-table-column
            label="生日"
            width="180">
            <template slot-scope="scope">
              {{ scope.row.userBath }}
            </template>
          </el-table-column>
          <el-table-column
            label="职业"
            width="180">
            <template slot-scope="scope">
              {{ scope.row.userMajor }}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="handleEdit(scope.$index,scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleLook()">查看
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index,scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[4, 5, 6, 7]"
          :page-size="4"
          layout="total, sizes, prev,pager, next, jumper"
          :total="parseInt(count)"
          class="fenye"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="主页信息">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="城市详情">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="社区论坛">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Menu",
    data() {
      return {
        tabPosition: 'left',
        tableData: [],
        dialogFormVisible: false,
        formLabelWidth: '80px',
        name: '',
        pwd: '',
        bath: '',
        major: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        page: '1',
        pageSize: '4',
        count: ''
      }
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        let param = {
          page: this.page,
          pageSize: this.pageSize
        };
        axios.get('/users', {
          params: param
        }).then((response) => {
          let resUser = response.data;
          let userInfo = response.data.result.list;
          //拿到数据条数
          this.count = resUser.result.countId;
          if (resUser.status === '0') {
            this.tableData = userInfo;
          } else {
            console.log(222);
          }
        })
      },
      //弹出添加信息框
      addInfo() {
        this.dialogFormVisible = true;
      },
      //确认添加
      addSuc() {
        axios.post('/users/addUser', {
          userName: this.name,
          userPwd: this.pwd,
          userBath: this.bath,
          userMajor: this.major
        }).then((response) => {
          let res = response.data;
          if (res.status === '0') {
            this.dialogFormVisible = false;
            this.name = '';
            this.pwd = '';
            this.bath = '';
            this.major = '';
            this.getUserInfo();
            this.$message({
              message: res.msg,
              type: 'success'
            });
          } else {
            console.log(222);
          }
        });
      },
      handleEdit(index, row) {

      },
      handleLook() {
      },
      //删除一条用户信息
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('/users/delUser', {
            userId: row.userId
          }).then((response) => {
            let res = response.data;
            if (res.status === '0') {
              this.getUserInfo();
              this.$message({
                message: res.msg,
                type: 'success'
              });
            } else {
              console.log(222);
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getUserInfo();
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getUserInfo();
      }
    }
  }
</script>

<style scoped>

</style>
