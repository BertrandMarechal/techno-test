drop table if exists table_for_grouping;
CREATE table table_for_grouping (
    category_1 TEXT,
    category_2 TEXT,
    category_3 TEXT,
    val INT
);

INSERT INTO table_for_grouping (
    category_1,
    category_2,
    category_3,
    val
)
VALUES
('A','1','+',(SELECT floor(random()* 10) + 1)),
('A','1','+',(SELECT floor(random()* 10) + 1)),
('A','1','-',(SELECT floor(random()* 10) + 1)),
('A','1','-',(SELECT floor(random()* 10) + 1)),
('A','2','-',(SELECT floor(random()* 10) + 1)),
('B','2','-',(SELECT floor(random()* 10) + 1)),
('B','2','+',(SELECT floor(random()* 10) + 1)),
('B','2','+',(SELECT floor(random()* 10) + 1)),
('B','1','+',(SELECT floor(random()* 10) + 1)),
('B','1','-',(SELECT floor(random()* 10) + 1)),
('B','2','-',(SELECT floor(random()* 10) + 1)),
('C','2','-',(SELECT floor(random()* 10) + 1)),
('C','1','-',(SELECT floor(random()* 10) + 1));

--basic example
SELECT category_1,category_2,category_3, grouping(category_1,category_2,category_3), sum(val)
FROM table_for_grouping
GROUP BY ROLLUP(category_1,category_2,category_3);
--grouping will be equal to 1, 3, or 7 in this case, as representing the bits as index of ignored fields as 001, 011, 111

--sum up table
SELECT 
        CASE
                WHEN a.category_1 IS NULL then 'Grand total'
                WHEN a.category_2 IS NULL then 'Sub total for ' || a.category_1
                ELSE ''
        END as label,
        CASE
                WHEN a.category_2 IS NULL then null
                ELSE a.category_1
        END,
        category_2,
        sum
FROM (
        SELECT category_1,category_2, sum(val)
        FROM table_for_grouping
        GROUP BY ROLLUP(category_1,category_2)
) a;

--sum up table 2 columns
SELECT 
        CASE
                WHEN a.category_1 IS NULL then 'Grand total'
                WHEN a.category_2 IS NULL then 'Sub total for ' || a.category_1
                ELSE 
                
                        a.category_1 || ' - ' || a.category_2
        END as label,
        grouping count,
        sum
FROM (
        SELECT category_1,category_2, grouping(category_1,category_2), sum(val)
        FROM table_for_grouping
        GROUP BY ROLLUP(category_1,category_2)
) a;