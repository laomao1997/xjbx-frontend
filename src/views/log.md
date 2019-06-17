## 20190618
- 引入 Prism 用于 Markdown 渲染时的代码高亮
- 引入 Katex 用于 Markdown 渲染时数学公式排版
- **有待解决** Markdown 渲染时，图片宽度过宽超出屏幕
- 
## 20190614
- 引入 Vuex 用于响应式状态存储
- 引入 vue-markdown 用于渲染 md 为 html 页面
- 引入 raw-loader 用于读取本地 md 文件之内容

# 以下为测试内容

## Tutorial 8 Activities
The following SQL exercises are based on 4 tables extracted from the Hospital database:

```
Staff (StaID, StaFName, StaLName, StaStreet, StaCity, StaState, StaPostcode, StaGender, StaPhone, StaDOB, StaSScale, StaCSalary, StaJType, StaSDate, StaType)

Nurse (NurID*, NurPosition)
FK (NurID) references Staff

Ward (WardNo, WardName, WardLoc, WardExt, WardCap)

NurseWard (NurID*, WardNo*, StartDate, Shift, EndDate)
FK (NurID) references Staff
FK (WardNo) references Ward
```

The related create table statements are as follows:

```sql
CREATE TABLE Staff (
      StaID CHAR(4) NOT NULL,
      StaFName VARCHAR(45),
      StaLName VARCHAR(45),
      StaStreet VARCHAR(30),
      StaCity VARCHAR(20),
      StaState CHAR(3),
      StaPostcode VARCHAR(10),
      StaGender CHAR(1),
      StaPhone CHAR(20),
      StaDOB CHAR(10),
      StaSScale CHAR(2),
      StaCSalary NUMERIC(8),
      StaJType CHAR(10),
      StaSDate DATE,
      StaType CHAR(1) NOT NULL,
      CONSTRAINT Staff_PK PRIMARY KEY (StaID)
);

CREATE TABLE Nurse (
      NurID CHAR(4) NOT NULL,
      NurPosition VARCHAR(10),
      CONSTRAINT Nurse_PK PRIMARY KEY (NurID),
      CONSTRAINT Nurse_FK FOREIGN KEY (NurID) REFERENCES Staff(StaID)
);

CREATE TABLE Ward (
      WardNo CHAR(3) NOT NULL,
      WardName VARCHAR(45),
      WardLoc VARCHAR(10),
      WardExt CHAR(4),
      WardCap NUMERIC(3),
      CONSTRAINT Wark_PK PRIMARY KEY (WardNo)
);

CREATE TABLE NurseWard (
      NurID CHAR(4) NOT NULL,
      WardNo CHAR(3) NOT NULL,
      StartDate DATE NOT NULL,
      Shift CHAR(5),
      EndDate DATE,
      CONSTRAINT NurseWard_PK PRIMARY KEY (StartDate, WardNo, NurID),
      CONSTRAINT NurseWard_FK1 FOREIGN KEY (WardNo) REFERENCES Ward(WardNo),
      CONSTRAINT NurseWard_FK2 FOREIGN KEY (NurID) REFERENCES Nurse(NurID)
);
```

## ERD

![erd.png](https://i.loli.net/2019/05/07/5cd13e3d9b0f5.png)

You can also use HospitalDB.sql (or HospitaDB.pdf) and Hospital-ERD that are in the following address to answer the tutorial questions: UTSonline/Learning Materials/Week 7/ Database Scripts for PostgreSQL

## Section 1: For each question below, do the following

- Construct a SELECT statement that contains an Equi-Join.
- Manually trace through the data using your SELECT statement to verify that it is correct, and that you understand exactly how the statement is executed.

> **Note**: Before you start, read the create table statements and double check the name of the FKs in the tables. For example, **staid** is PK in STAFF table, and it is FK in NURSE table with different name i.e. **nurid**.

### 1. List all the ward numbers that have staff members from Victoria state. Eliminate duplicate values.

```sql
select distinct(wardno) from nurseward
inner join staff
on staff.staid = nurseward.nurid
where stastate = 'VIC';
```

```
 wardno
--------
 W12
 W27
 W33
 W49
 W62
 W69
 W75
 W99
(8 rows)
```

### 2.	List all the ward numbers where staff from New South Wales state have worked in. Organize the list alphabetically descending and avoid duplicates in the result.

```sql
select distinct wardno from nurseward
inner join staff
on staff.staid = nurseward.nurid
where staff.stastate = 'NSW'
order by wardno desc;
```

```
 wardno
--------
 W99
 W65
(2 rows)
```

### 3. List all the ward numbers and the ward name that “Christopher Hanton” has worked in.

```sql
select W.wardno, W.wardname from staff S 
inner join nurseward NW on S.staid = NW.nurid
inner join ward W on W.wardno = NW.wardno 
where stafname like 'Christopher' and stalname like 'Hanton';
```

```
 wardno |       wardname
--------+----------------------
 W12    | Emergency Department
 W12    | Emergency Department
 W62    | Neurology
 W99    | Coronary care unit
(4 rows)
```

### 4.	List all the wards names where nurses have worked in “Night” shifts.
```sql
select distinct W.wardname from nurseward NW
join ward W on W.wardno = NW.wardno
where NW.shift like 'Night';
```
```
           wardname
-------------------------------
 Cardiology
 Emergency Department
 Intensive care unit
 Pathology
 Pediatric intensive-care unit
(5 rows)
```

### 5.	List full name of all staff that live in the same state as staff employee S632.
```sql
select  (S.stafname||' '||S.stalname) as fullname, S.stastate
from staff S join staff E on S.stastate = E.stastate
where E.staid = 'S632';
```
```
      fullname      | stastate
--------------------+----------
 Jordan Tuckson     | VIC
 Christopher Hanton | VIC
 Benjamin Kendall   | VIC
 Evelyn Holmquist   | VIC
 Mikalya Vida       | VIC
(5 rows)
```

### 6.	List full name and salary of staff who get paid more than Christopher Hanton (S632). 
```sql
select  (S.stafname||' '||S.stalname) as fullname, S.stacsalary
from staff S join staff E on S.stacsalary > E.stacsalary
where E.staid = 'S632';
```
```
      fullname      | stacsalary
--------------------+------------
 Natasha Laboureyas |     150000
 Chloe Beveridge    |     130000
 Jordan Tuckson     |     170000
 Evelyn Holmquist   |     110000
(4 rows)
```

### 7.	For Christopher Hanton (S632), give his salary, and list number and name of the wards he has worked in.
```sql
select distinct S.stacsalary, NW.wardno, W.wardname from staff S
inner join nurseward NW on S.staid = NW.nurid
inner join ward W on NW.wardno = W.wardno
where S.staid = 'S632';
```
```
 stacsalary | wardno |       wardname
------------+--------+----------------------
     100000 | W12    | Emergency Department
     100000 | W62    | Neurology
     100000 | W99    | Coronary care unit
(3 rows)
```

### 8.	List full name of the staff whose salary fall between the salary of Mikalya Vida (S837) and Natasha Laboureyas (S673), not inclusive.
```sql
select distinct S.stafname ||' ' || S.stalname as fullname, S.stacsalary from staff S
inner join staff ES on S.stacsalary > ES.stacsalary
inner join staff EL on S.stacsalary < EL.stacsalary
where ES.staid = 'S837' and EL.staid = 'S673';
```
```
      fullname      | stacsalary
--------------------+------------
 Benjamin Kendall   |     100000
 Chloe Beveridge    |     130000
 Christopher Hanton |     100000
 Evelyn Holmquist   |     110000
(4 rows)
```
## Section 2: For each question below, do the following:
 - Construct a SELECT statement that contains Full outer join, Left Outer Join or Right Outer Join.
 - Manually trace through the data using your SELECT statement to verify that it is correct, and that you understand exactly how the statement is executed.

### 1.	List all ward numbers and staff ID of those who have worked in them. (Give two different ways of constructing this query).
```sql
select ward.wardno, nurid
from ward right outer join nurseward n on ward.wardno = n.wardno;
```
```
 wardno | nurid
--------+-------
 W12    | S632
 W27    | S775
 W65    | S898
 W69    | S775
 W12    | S676
 W12    | S632
 W49    | S676
 W62    | S567
 W33    | S837
 W27    | S676
 W99    | S898
 W69    | S837
 W62    | S632
 W75    | S567
 W99    | S632
(15 rows)
```

### 2.	Which staff members have not worked in any wards?
```sql
select distinct S.staid, S.stafname, S.stalname, S.stacsalary from staff S
left outer join nurseward N on S.staid = N.nurid
where N.nurid isnull;
```
```
 staid | stafname |  stalname  | stacsalary
-------+----------+------------+------------
 S003  | Chloe    | Beveridge  |     130000
 S005  | Jordan   | Tuckson    |     170000
 S673  | Natasha  | Laboureyas |     150000
(3 rows)
```

### 3.	List all the available wards in 2014 (ward2014) and the capacity of those that are still available. 
```sql
select ward.wardno, ward.wardcap from ward2014
right outer join ward
on ward.wardno = ward2014.wardno;
```
```
 wardno | wardcap
--------+---------
 W12    |      60
 W49    |      10
 W62    |      20
 W27    |      10
 W33    |       8
 W65    |      15
 W69    |      25
 W99    |      20
 W75    |      12
(9 rows)
```

### 4.	Which wards used to be active in 2014, and are not provided anymore?
```sql
select W2.wardno from ward W 
right outer join ward2014 W2 
on W.wardno = W2.wardno
where W.wardno isnull;
```
```
 wardno
--------
 W73
(1 row)
```

### 5.	List all the wards that were available in both the ward2014 and the current wards?
```sql
select ward.wardno from ward2014
left outer join ward
on ward.wardno = ward2014.wardno
where not ward.wardno isnull;
```
```
 wardno
--------
 W12
 W49
 W62
 W33
 W65
 W69
 W99
(7 rows)
```