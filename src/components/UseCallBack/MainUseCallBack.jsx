import React, {useCallback, useState} from 'react'
import Title from './Title'
import CountAge from './CountAge'
import ButtonClick from './ButtonClick'
import CounterSalary from './CounterSalary'

const MainUseCallBack = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback( () => {
        setAge(age + 1)
    }, [age])


    const incrementSalary = useCallback( () => {
        setSalary(salary + 10000)
    }, [salary])

  return (
    <div>
        <Title/>
        <CountAge name="Hassan" age={age} />
        <ButtonClick handleClick={incrementAge}>Increment Age</ButtonClick>
        <CounterSalary salary={salary} />
        <ButtonClick handleClick={incrementSalary}>Increment Salary</ButtonClick>
    </div>
  )
}

export default MainUseCallBack