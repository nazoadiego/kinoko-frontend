import Link from 'next/link'
import { FC } from 'react'
import Layout from '../layout/layout'

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <Layout>
      {/* // <%# Dashboard Top %> */}
      <div className="min-h-screen">
        <div className="flex items-center justify-center pt-12">
          <div className="flex items-center">
            <div className="small-orb"></div>
          </div>

          <div className="ml-8 flex items-center">
            {/* <%= link_to root_path, style: "text-decoration: none" do %> */}
            <Link href="/">
              <a className="text-9xl">
                <span className="text-[#573BC9]">Ki</span>noko
              </a>
            </Link>
            {/* <% end %> */}
          </div>
        </div>

        {/* // <%# Dasboard Bottom %> */}

        <div className="mx-20">
          <div className="flex justify-between">
            <h3 className="text-4xl text-white">Tasks</h3>

            <label
              htmlFor="create-task"
              className="modal-button btn btn-primary"
            >
              New Task
            </label>
            {/* <%= render "tasks/new_modal" %> */}
          </div>

          {/* <%# Grid %> */}

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* <% @tasks.each do |task| %> */}
            {/* <%= render "tasks_card", task: task %> */}
            {/* <% end %> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
