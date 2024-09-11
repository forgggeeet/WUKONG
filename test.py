from sqlalchemy import create_engine

# 创建数据库引擎
engine = create_engine('mysql+mysqlconnector://root:yongJie112233@localhost/wukong1')

# 测试连接
try:
    with engine.connect() as connection:
        print("Database connection successful!")
except Exception as e:
    print(f"Error: {e}")
