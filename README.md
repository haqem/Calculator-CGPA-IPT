# Calculator CGPA IPT
This system helps you to calculate a GPA/CGPA. Available grade system for Universiti Teknologi MARA, Kolej Poly-Tech MARA, dan Politeknik. This system only displays the estimated grade of grade obtained and is not the official semester result.

## Installation
```
Drop all file into server.
```
Before install into your server please make sure to change or select Grade first on ```select name="hqgrade"``` and change the value of each Option in index.htm file. Please ensure that you follow the point grade below. ```Note: Point Grade = Value in index.htm```

## Usage

* Form Name
  - Last Semester as ```frmGrade0```
  - Current Semester as ```frmGrade1 - frmGrade8```
  - Average as ```frmGrade9```

* For the safety, please don't change the form Last semester as ```frmGrade0``` default.

* If you have more than 8 course If you want to add more than 8 courses, be sure the JavaScript section
```javascript 
computesumForm ()
``` 
and change on line 39 
```javascript 
for (var i = 0; i < 9; i++) {
```
Make sure the value 9 is changed to the course you want. 

**Example**

```d
If you want 9 course, duplicate the last table of *Current Semester* and change to *frmGrade9* and 
form *Average* change to be *frmGrade10*
```

1. Calculation based on Universiti Teknologi MARA (UiTM) Grade. 

| Grade  | Mark | Point Grade | Status |
| :---:  |:---: |    :---:    | :---:  |
| A+  | 90-100  | 4.00 | Lulus |
| A  | 80-89  | 4.00 | Lulus |
| A- | 75-79   | 3.67 | Lulus |
| B+  | 70-74  | 3.33 | Lulus |
| B  | 65-69  | 3.00 | Lulus |
| B-  | 60-64  | 2.67 | Lulus |
| c+  | 55-59  | 2.33 | Lulus |
| C  | 50-54  | 2.00 | Lulus |
| C-  | 47-49  | 1.67 | Gagal |
| D+  | 44-46  | 1.33 | Gagal |
| D  | 40-43  | 1.00 | Gagal |
| E  | 30-39  | 0.67 | Gagal |
| F  | 0-29  | 0.00 | Gagal |

2. Calculation based on Kolej Poly-Tech MARA (KPTM) Grade. 

| Grade  | Mark | Point Grade | Status |
| :---:  |:---: |    :---:    | :---:  |
| A+  | 90-100  | 4.00 | Amat Cemerlang |
| A  | 80-89  | 4.00 | Cemerlang |
| A-  | 75-79  | 3.75 | Cemerlang |
| B+  | 70-74  | 3.50 | Kepujian |
| B  | 65-69  | 3.00 | Kepujian |
| B-  | 60-64  | 2.75 | Lulus |
| C+  | 55-59  | 2.50 | Lulus |
| C  | 50-54  | 2.00 | Lulus |
| C-  | 47-49  | 1.75 | Lulus |
| D+  | 44-46  | 1.50 | Lulus |
| D  | 40-43  | 1.00 | Lulus |
| F  | 0-39 | 0.00 | Gagal |

3. Calculation based on Politeknik Grade. 

| Grade  | Mark | Point Grade | Status |
| :---:  |:---: |    :---:    | :---:  |
| A+  | 90-100  | 4.00 | Amat Cemerlang |
| A  | 80-89  | 4.00 | Kepujian |
| A-  | 75-79  | 3.67 | Kepujian |
| B+  | 70-74  | 3.33 | Kepujian |
| B  | 65-69  | 3.00 | Kepujian |
| B-  | 60-64  | 2.67 | Lulus |
| C+  | 55-59  | 2.33 | Lulus |
| C  | 50-54  | 2.00 | Lulus |
| C-  | 47-49  | 1.67 | Lulus |
| D+ | 44-46  | 1.33 | Lulus |
| D  | 40-43  | 1.00 | Lulus |
| E  | 30-39  | 0.67 | Gagal |
| E- | 20-29 | 0.33 | Gagal |
| F  | 0-19  | 0.00 | Gagal |

* This Grade can be change on ```select > name="hqgrade" > value```

## Have 3 Table in This System

1. Last Semester
  - Former called as CGPA
  - This value for undergraduate student.
  - This field can be left blank. (for user Semester 1)
  - If field have value system will be calculate with ```Current Semester```.
  - Calculation format for get CGPA ```Total Grade Points``` / ```Total Credit Hours``` = GPA/CGPA
2. Current Semester
  - Former called as GPA
  - This field can't be blank, this table will calculate ```frmGrade 1-8``` and show at ```frmGrade9```
  - Calculation format for get Grade Points = ```Pointer``` * ```Credit Hours```
  - Calculation format for get GPA ```Grade Points```/ ```Credit Hours``` = GPA/CGPA
3. Average
  - Total Grade, and Credit Hours if have value in Last Semester system will be added both.
  - CGPA/GPA if Last Semester field is blank system will calculate current semester only.
  - CGPA/GPA if Last Semester have value system will be calculate ```Total Grade Points``` / ```Total Credit Hours```

## Source

1. Grade System by UiTM: [UiTM Page 45](https://hea.uitm.edu.my/v3/downloads/Acad_regulations/PerAkadDip-SarjanaMudaUiTMPindaan2017Bil1.pdf)
2. Grade System by KPTM: [KPTM Page 17](http://astar.kptm.edu.my/v3/images/kptm/BPAKPTMPINDAAN2015SENATFinalDraf15Meil2015.pdf)
3. Grade System by Politeknik: [Politeknik Gred Baru](http://122.129.120.12/bahan/BPN%20-%20PINDAAN_PELAKSANAAN_SISTEM_GRED_BAHARU_POLITEKNIK_KPT.pdf)


## License
This library is under ```MIT license```, please look at the LICENSE file

###### Copyright © [Haqem Network](https://haqem.my)
