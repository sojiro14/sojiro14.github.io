---
layout: Layout
title: "MySQLにおけるNOT NULLカラムへのインサート時の挙動"
date: 2014-10-20 13:44:28 +0900
comments: true
categories: [MySQL]
---
MySQLでカラムにNOT NULLを指定した際、そのカラムに対するインサート操作による挙動が特殊なのでまとめる。

## 単列インサートと複数列インサートで挙動が変わる
 ``` NOT NULL ```を指定したカラムを含むテーブルへのインサートでは、一度に1行のみ挿入する単列インサートと、一度に複数行を挿入する複数列インサート（バルクインサート）で挙動が変わる。

[MySQLマニュアル](http://dev.mysql.com/doc/refman/5.6/en/insert.html)からの抜粋
> Inserting NULL into a column that has been declared NOT NULL. For multiple-row INSERT statements or INSERT INTO ... SELECT statements, the column is set to the implicit default value for the column data type. This is 0 for numeric types, the empty string ('') for string types, and the “zero” value for date and time types. INSERT INTO ... SELECT statements are handled the same way as multiple-row inserts because the server does not examine the result set from the SELECT to see whether it returns a single row. (For a single-row INSERT, no warning occurs when NULL is inserted into a NOT NULL column. Instead, the statement fails with an error.)

単列インサートの場合は``` NOT NULL ```が指定されたカラムに``` NULL ```値が挿入されるとそのクエリはエラーとなって失敗するが、複数列インサートの場合は警告(warning)を発するものの、クエリは正常に受け付けられる。

その際、``` NULL ```値が指定された各カラムにはそれぞれのカラムのデータ型の暗黙的なデフォルト値が挿入される。（数値型なら``` 0 ```、文字列型なら空文字``` '' ```、etc...）

## 検証
* MySQLのバージョンは5.1.69
    * ただしマニュアルの該当箇所はバージョン5.7まで変更がないため、どのバージョンでも同じ挙動と思われる
* テーブル定義は以下
``` mysql
CREATE TABLE `not_null_test` (
  `id` int(10) unsigned NOT NULL,
  `test_score` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 単列インサート
``` mysql
mysql> insert into
not_null_test
(id, test_score, created_at)
values
(1, NULL, NULL);

ERROR 1048 (23000): Column 'test_score' cannot be null
```

### 複数列インサート
``` mysql
mysql> insert into
not_null_test
(id, test_score, created_at)
values
(1, NULL, NULL),
(2, NULL, NULL);

Query OK, 2 rows affected, 2 warnings (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 2 

mysql> select * from not_null_test;
+----+------------+---------------------+
| id | test_score | created_at          |
+----+------------+---------------------+
|  1 |          0 | 2014-10-18 13:35:10 |
|  2 |          0 | 2014-10-18 13:35:10 |
+----+------------+---------------------+
2 rows in set (0.00 sec)
```
※ timestampにテーブル定義で設定したデフォルト値``` '0000-00-00 00:00:00' ```ではなく、型のデフォルト値である現在時刻が入っている点に注意
