import { ITarefa } from "../../../types/tarefa"
import style from "./Item.module.scss"

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        finalizado,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li
            className={`
                ${style.item} ${selecionado ? style.itemSelecionado : ''} 
                ${finalizado ? style.itemCompletado : ""}
            `}
            onClick={() => !finalizado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                finalizado,
                id
            })}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {finalizado &&
                <span 
                    className={style.concluido}
                    aria-label="Tarefa concluída!">
                </span>
            }
        </li>
    )
}