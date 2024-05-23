import { Flex, Alert, AlertIcon } from '@chakra-ui/react'

const NoTask = () => {
  return (
    <Flex>
        <Alert status='warning'>
            <AlertIcon />
            No task found
        </Alert>
    </Flex>
)
}

export default NoTask