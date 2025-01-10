import { WorkflowDefinition } from './workflowSchemas'

export type TaskStatus = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'

export interface TaskResponse {
    id: string
    run_id: string
    node_id: string
    parent_task_id?: string
    status: TaskStatus
    inputs?: any
    outputs?: any
    start_time?: string
    end_time?: string
    subworkflow?: WorkflowDefinition
    subworkflow_output?: Record<string, any>
}
