from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_cors import CORS  # 导入 CORS
app = Flask(__name__)
CORS(app)
# 配置 MySQL 数据库
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:yongJie112233@localhost/wukong1'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 定义用户模型
class User(db.Model):
    __tablename__ = 'users1'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# 初始化数据库
with app.app_context():
    db.create_all()

# 注册新用户的路由
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify({"message": "用户名已存在"}), 400

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "注册成功"}), 201

# 用户登录的路由
@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not check_password_hash(user.password, password):
            return jsonify({"message": "用户名或密码错误"}), 401

        # 模拟令牌生成
        token = "example_token"
        return jsonify({"token": token}), 200

    except Exception as e:
        print(f"Error occurred: {e}")  # 输出详细的错误信息到控制台
        return jsonify({"message": "服务器内部错误"}), 500
if __name__ == '__main__':
    app.run(debug=True)
