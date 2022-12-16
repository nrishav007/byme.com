import { Progress } from "@chakra-ui/react";

export default function ProgressLoader ({size,colorScheme}) {
    return (
        <>
        <Progress size={size} colorScheme={colorScheme}  isIndeterminate />
        </>
    )
}