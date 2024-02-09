import Select from 'react-select'
import styled from 'styled-components'

export const SelectOption = (props: any) => {
    const {options, selected, onChange, children} = props
    return (
      <SelectWrapper>
        <SelectHeadText>{children}</SelectHeadText>
        <SelectOptionsWrapper>
          <Select
            options={options}
            defaultValue={selected}
            onChange={onChange}
          />
        </SelectOptionsWrapper>
      </SelectWrapper>
    )
}

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SelectHeadText = styled.p``

const SelectOptionsWrapper = styled.div`
  margin-left: 5px;
  margin-right: 25px;
`
