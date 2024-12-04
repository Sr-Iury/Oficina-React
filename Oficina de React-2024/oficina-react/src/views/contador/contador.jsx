import { Button, Stack, Typography } from "@mui/material"
import { UICard } from "../../components/ui/card"
import { Contador } from "../../components/contador/contador"

export const ContadorView = () => {
   //  iniciar sempre com 0
   return (
      <UICard>
         <Typography variant="h5" mb={5} >
            MEU CONTADOR
         </Typography>

         <Contador color={'red'} titulo={'Botão Vermelho'}/>
         
         <Contador color={'black'} titulo={'Botão Preto'}/>

         <Contador color={'purple'} titulo={'Botão Roxo'}/>

         <Contador color={'pink'} titulo={'Botão Rosa'}/>
      </UICard>
   )
}