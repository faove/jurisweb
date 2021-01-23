export interface Service {
    id?: number;
    type_services_id: number;
    mode_services_id: number;
    areas_id: number;
    associate_id: number;
    client_id: number;
    rate_variable: number;
    rate_fixed: number;
    rate_process: number;
    phone_service: string;
    chat_service: string;
    chat_service_name: string;
    fee_service: string;
    date_service: string;
    date_aplication: string;
    date_pay: string;
    date_performance: string;
    created_at?: string;        
    updated_at?: string; 
}
