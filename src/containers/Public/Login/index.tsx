import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'

import { Box, Flex, Container, FormControl, Input, Stack } from 'native-base'
import { NavigationStackProp } from 'react-navigation-stack'

import { useStore } from 'stores'

interface IProps {
  navigation?: NavigationStackProp<{ userId: string }>
}

const AuthPage: React.FC<IProps> = ({ navigation }) => {
  return (
    <Box alignItems={'center'}>
      <Container>
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText>
            <FormControl.ErrorMessage>Atleast 6 characters are required.</FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Container>
    </Box>
  )
}

export default observer(AuthPage)
