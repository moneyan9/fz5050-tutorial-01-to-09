import { Person } from "../staticindex"; //データ構造はexportしている定義から流用
import { GetServerSideProps } from 'next';


export type PersonDetailProps = Person;


const PersonDetail = ({ name, details }: PersonDetailProps) => {
    return (
        <div>
            this is persons/[id].tsx page!
            <div>hello {name}</div>
            <pre>{details}</pre>
        </div>
    );

}

export default PersonDetail

//データフェッチ
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //明示的に文字列型と宣言
    const id = ctx.params?.id as string;

    const response = await fetch('http://localhost:4001/persons?id=' + id);
    const persons = await response.json();

    return {
        props: {
            id: persons[0].id,
            name: persons[0].name,
            details: persons[0].details
        }
    };
}