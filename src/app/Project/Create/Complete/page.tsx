"use client";

import { OrganismsPostFormModal } from "@/app/_components/organisms/modal/PostFormModal";
import { openModal } from "@/app/_state/slice/modal";
import { store } from "@/app/_state/store";
import { useState } from "react";

const projectData = {
  title: "新しい作業プロジェクトのタイトル",
  description:
`このプロジェクトは、チームメンバーが協力して作業を進めるために作成されました。
目的や目標、進捗状況を共有し、円滑なコミュニケーションを図ることができます。
プロジェクトの詳細ページでは、タスクの追加や進捗の投稿、メンバーとのコメントのやり取りが可能です。
まずはプロジェクトの概要を確認し、最初の進捗を投稿してみましょう。
進捗を投稿することで、他のメンバーにも作業状況が伝わり、より効率的にプロジェクトを進めることができます。
今後も定期的に進捗を更新し、チーム全体で目標達成を目指しましょう。

このプロジェクトの目的は、チーム全員が一丸となって目標を達成することです。各メンバーは自分の役割を理解し、積極的にコミュニケーションを取りながら作業を進めていきます。プロジェクトの進捗は、定期的に共有されることで、全員が現状を把握しやすくなり、問題が発生した場合も迅速に対応することができます。

プロジェクトの詳細ページでは、タスクの追加や進捗の投稿が簡単に行えます。タスクを追加することで、作業内容が明確になり、誰がどの作業を担当しているかが一目で分かります。また、進捗を投稿することで、作業の進行状況をリアルタイムで共有でき、他のメンバーからのフィードバックやアドバイスを受けることも可能です。

コメント機能を活用することで、疑問点や提案などを気軽にやり取りできます。これにより、コミュニケーションの活性化が図られ、チーム全体のモチベーション向上にもつながります。プロジェクトの進行に伴い、必要に応じてタスクの見直しや追加を行い、柔軟に対応していきましょう。

進捗を投稿する際は、作業内容や達成したこと、今後の課題などを具体的に記載することが重要です。これにより、他のメンバーが状況を正確に把握でき、必要なサポートを迅速に提供することができます。定期的な進捗報告は、プロジェクトの透明性を高め、チーム全体の信頼関係を築く上でも大切です。

今後も定期的に進捗を更新し、チーム全体で目標達成を目指しましょう。プロジェクトの成功には、メンバー一人ひとりの積極的な参加と協力が不可欠です。困難な課題に直面した際は、チームで協力して解決策を考え、前向きに取り組んでいきましょう。

このプロジェクトを通じて、チームの結束力を高め、より良い成果を生み出すことを目指します。皆さんの積極的な参加と協力を期待しています。`,
  createdAt: new Date(),
}

export default function ProjectCreateCompletePage() {
  const [open, setOpenModal] = useState(true);
  
  return (
    <div className="flex flex-col justify-center items-center w-full m-8">
      <span className="font-bold text-green-700 flex text-2xl text-center mb-3">
        おめでとうございます！<br/>
        新しい作業プロジェクトを作成しました！
        <br/>
        <br/>
        最初の進捗を投稿しましょう！
      </span>
      <button
        className="bg-green-600 text-white rounded-full px-4 py-2 mt-4 w-fit mb-10"
        onClick={() => {
          setOpenModal(false);
          store.dispatch(openModal());
        }}
      >
        投稿する
      </button>
      <div className="flex flex-col justify-center border w-full rounded-3xl p-4">
        <h1 className="text-2xl font-bold mb-5">{projectData.title}</h1>
        <p>
          {projectData.description.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <OrganismsPostFormModal/>
      {
              // open
              // ? (
              //   <div className="overlay">
              //     <div className="flex flex-col justify-center items-end h-full">
              //       <button
              //         className="text-6xl text-gray-600 hover:text-gray-800 flex items-center justify-center rounded-full"
              //         onClick={() => setOpenModal(false)}
              //         aria-label="閉じる"
              //       >
              //       ×
              //       </button>
              //       <div className="bg-white text-2xl flex flex-col items-center w-[800px] rounded-2xl p-8">
              //         <span className="font-bold text-green-700 flex text-center mb-3">
              //           おめでとうございます！<br/>
              //           新しい作業プロジェクトを作成しました！
              //           <br/>
              //           <br/>
              //           最初の進捗を投稿しましょう！
              //         </span>
              //         <button
              //           className="bg-green-600 text-white rounded-full px-4 py-2 mt-4 w-fit"
              //           onClick={() => {
              //             setOpenModal(false);
              //             store.dispatch(openModal());
              //           }}
              //         >
              //           投稿する
              //         </button>
              //       </div>
              //     </div>
              //   </div>)
              // : null
      }
      
    </div>
  );
}
