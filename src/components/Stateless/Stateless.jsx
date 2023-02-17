import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { statistSummary } from '../../redux/statistics/stat-operations';
import {
    selectStatSummury,
    selectExpenseSummary,
    selectIncomeSummary,
} from '../../redux/statistics/selectorStatistics';
import {
    DivConteiner, DivSelect, Option,
    Table, TableHead, Tbody, UlList, UlResults, LiResultsName, LiResultsExpenses, LiResultsIncome,
    Box
} from '../Stateless/Stateless.styled';

export const Stateless = () => {
    const objMonth = [
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value:4 },
        { label: 'May', value: 5 },
        { label: 'June', value: 6 },
        { label: 'July', value: 7 },
        { label: 'August', value: 8 },
        { label: 'September', value: 9 },
        { label: 'October', value: 10 },
        { label: 'November', value: 11 },
        { label: 'December', value: 12 },
    ]
    const objYear = [
        { name: '2019', value: 2019 },
        { name: '2020', value: 2020 },
        { name: '2021', value: 2021 },
        { name: '2022', value: 2022 },
        { name: '2023', value: 2023 },
        { name: '2024', value: 2024 },
        { name: '2025', value: 2025 },
    ]

    const date = new Date();
    console.log("Date: ", date);
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    // const [selectedOption, setSelectedOption] = useState(null);

    const statSummury = useSelector(selectStatSummury);
    const expenseSummary = useSelector(selectExpenseSummary);
    const incomeSummary = useSelector(selectIncomeSummary);

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'month') setMonth(value);
        else setYear(value);
    };

    useEffect(() => {
        dispatch(
        statistSummary({
            month: month,
            year: year,
        })
        );
    }, [dispatch, month, year]);


    return (
        <>
            <DivConteiner>
                <DivSelect>

                    <Select
                        
                        options={objMonth}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 20,
                            colors: {
                                ...theme.colors,
                                primery: 'black',
                            }

                        })}
                    />

                    {/* <Select name="month" id="month" onChange={handleChange}> */}
                            {/* {objMonth.map(({ name, value }) => {
                                if (value === currentMonth) {
                                    return (
                                        <Option value={value} selected>{name}</Option>
                                )
                                } else {
                                    return (
                                        <Option value={value} >{name}</Option>
                                )
                                }
                            })
                            } */}
                    {/* </Select> */}

                    <Select name="year" id="year" onChange={handleChange}>
                        {objYear.map(({ name, value }) => {
                                if (value === currentYear) {
                                    return (
                                        <Option value={value} selected>{name}</Option>
                                )
                                } else {
                                    return (
                                        <Option value={value} >{name}</Option>
                                )
                                }
                            })
                            }
                    </Select>
                </DivSelect>

                <Table>
                    <thead>
                        <TableHead>
                            <li>Category</li>
                            <li>Sum</li>
                        </TableHead>
                    </thead>
                    <UlList>
                        {statSummury.length > 0 ? (
                            statSummury.map(({ name, total }) => {
                                return (
                                <>
                                    <li key={name}><Box className={name}></Box>{name}</li>
                                    <li>{total}</li>
                                </>
                            );
                            })
                        ) : (
                            <p>No information</p>
                        )}
                    </UlList>

                    <Tbody>
                        <UlResults>
                            <LiResultsName>Expenses:</LiResultsName>
                            <LiResultsExpenses>{expenseSummary}</LiResultsExpenses>
                        </UlResults>
                        <UlResults>
                            <LiResultsName>Income:</LiResultsName>
                            <LiResultsIncome>{incomeSummary}</LiResultsIncome>
                        </UlResults>
                    </Tbody>
                </Table>
            </DivConteiner>
            
        </>
    );
};




//---------------
// {/* <DivSelect>
//                     <Select name="month" id="month" onChange={handleChange}>
//                             {objMonth.map(({ name, value }) => {
//                                 if (value === currentMonth) {
//                                     return (
//                                         <Option value={value} selected>{name}</Option>
//                                 )
//                                 } else {
//                                     return (
//                                         <Option value={value} >{name}</Option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>

//                     <Select name="year" id="year" onChange={handleChange}>
//                         {objYear.map(({ name, value }) => {
//                                 if (value === currentYear) {
//                                     return (
//                                         <Option value={value} selected>{name}</Option>
//                                 )
//                                 } else {
//                                     return (
//                                         <Option value={value} >{name}</Option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>
//                 </DivSelect> */}




//----------------------<tr><td>
// {/* <table>
//                 <thead>
//                 <tr>
//                     <td>Category</td>
//                     <td>Sum</td>
//                 </tr>
//                 </thead>
//                 <ul>
//                 {statSummury.length > 0 ? (
//                     statSummury.map(({ name, total }) => {
//                     return (
//                         <tr key={name}>
//                         <td>{name}</td>
//                         <td>{total}</td>
//                         </tr>
//                     );
//                     })
//                 ) : (
//                     <p>No information</p>
//                 )}
//                 </ul>
//                 <tbody>
//                 <tr>
//                     <td>Expenses:</td>
//                     <td>{expenseSummary}</td>
//                 </tr>
//                 <tr>
//                     <td>Income:</td>
//                     <td>{incomeSummary}</td>
//                 </tr>
//                 </tbody>
//             </table> */}