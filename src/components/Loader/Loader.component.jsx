import React from 'react'
import { Loader } from 'semantic-ui-react'
import { LoaderDiv } from './Loader.styles'

const Spinner = () => <LoaderDiv><Loader active inline='centered' /></LoaderDiv>

export default Spinner