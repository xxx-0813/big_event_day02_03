$(function() {
    // 1.注册登录表单的切换
    $('.link_reg').on('click', function() {
        $('.login_box').hide().next().show()
    })
    $('.link_login').on('click', function() {
        $('.reg_box').hide().prev().show()
    })

    // 2.自定义验证规则
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg_box [name=password]').val()
            if (value !== pwd) {
                return '两次密码不一致'
            }

        }
    })

    // 3.注册提交功能
    $('#reg_form').on('submit', function(e) {
        e.preventDefault()

        // ajax提交
        $.ajax({
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            type: 'POST',
            data: {
                username: $('.reg_box [name=username]').val(),
                password: $('.reg_box [name=password]').val()
            },
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
            }
        })
    })

})