import './ConfirmModel.css'
import Card from "../Card/card";
import BackDrop from "../BackDrop/BackDrop";
const ConfirmModel=props=>{
    return <BackDrop>
        <Card className={'confirmModel'}>
            <div className={'confirmText'}>
                <p>该操作不可恢复确认吗</p>
            </div>
            <div className={'confirmButton'}>
                <button onClick={props.onOk}>确认</button>
                <button onClick={props.onCancel}>取消</button>
            </div>

        </Card>
    </BackDrop>

}
export default ConfirmModel;